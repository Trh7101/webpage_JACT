import { CssBaseline } from '@mui/material';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './util/AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <AuthProvider>
                <CssBaseline />
                <App />
            </AuthProvider>
        </CookiesProvider>
    </React.StrictMode>
);

