import React, { useState } from 'react';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

export function Auth() {
    const [login, setLogin] = useState(true);

    const onSignup = () => setLogin(true);
    const signup = () => setLogin(false);

    if (login) {
        return (<SignIn onSignup={signup} />);
    }

    return (<SignUp onSignup={onSignup} />);
}