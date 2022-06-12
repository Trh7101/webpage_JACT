import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

export function Wrapper() {
    return (
        <React.Fragment>
            <Navigation />
            <Outlet />
        </React.Fragment>
    );
}