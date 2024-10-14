import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import NavBarApp from '../components/NavBarApp';

const Root = () => {
    return (
        <div>
            <NavBarApp/>
            <Outlet />
        </div>
    )
}

export default Root