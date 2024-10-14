import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/add-recipe`}>Add Recipe</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Root