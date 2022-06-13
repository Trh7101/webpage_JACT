import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const AuthContext = React.createContext(null);

const API_BASE = "https://makerapi-production.up.railway.app"

function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('loading');
    const [cookies, setCookie, removeCookie] = useCookies();
    const [token, setToken] = useState("");

    const signIn = async (email, password) => {
        if (user) {
            throw new Error("User is already signed in");
        }
        const response = await fetch(`${API_BASE}/id/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const res = await response.json();
        if (response.status !== 200) {
            throw new Error(`Invalid response ${response.status}: ${JSON.stringify(res)}`);
        }
        setCookie("atk", res.token);
        setToken(res.token);
        setUser(res.user);
        setStatus('session');
    };

    const register = async (name, email, password) => {
        if (user) {
            throw new Error("User is already signed in");
        }
        const response = await fetch(`${API_BASE}/id/register`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const res = await response.json();
        if (response.status !== 200) {
            throw new Error(`Invalid response ${response.status}: ${JSON.stringify(res)}`);
        }
    }

    const signOut = async () => {
        if (!user) {
            throw new Error("No user signed in");
        }
        setToken("");
        setStatus('loggedOut');
        removeCookie("atk");
        setUser(null);
    };

    const getProfile = async (token) => {
        const response = await fetch(`${API_BASE}/id/profile`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const res = await response.json();
        if (response.status !== 200) {
            return new Error(`[a/gp]invalid response ${response.status}: ${JSON.stringify(res)}`);
        }
        setUser(res.user);
    };

    const getToken = () => {
        const claims = parseJwt(token);
        if (claims.exp < Date.now() / 1000) {
            signOut();
            throw new Error("Expired token");
        }
        return token;
    };

    const init = async () => {
        if (cookies.atk) {
            const tk = cookies.atk;
            const claims = parseJwt(tk);
            if (claims.exp < Date.now() / 1000) {
                removeCookie('atk');
                setStatus('loggedOut');
                return;
            }
            setToken(tk);
            try {
                await getProfile(tk);
                setStatus('session');
            } catch (e) {
                console.error(e.message);
                setStatus("loggedOut");
                setToken("");
                setUser(null);
            }
        } else {
            setStatus('loggedOut');
        }
    }

    const value = {
        user: user,
        status: status,
        init: init,
        login: signIn,
        logout: signOut,
        token: getToken,
        register: register,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    useEffect(() => {
        if (auth.status === 'loading') {
            auth.init();
        }
    }, []);

    if (auth.status === 'loading') {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (!auth.user) {
        return <Navigate to="/landing/auth" state={{ from: location }} replace />;
    }

    return children;
}