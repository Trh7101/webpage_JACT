import React from 'react';
import { Outlet } from 'react-router-dom';
import { PrimarySearchAppBar } from './Appbar';

export function AppShell() {
    return (
        <React.Fragment>
            <PrimarySearchAppBar />
            <Outlet />
        </React.Fragment>
    );
}