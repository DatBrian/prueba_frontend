import "./Link.css";
import type React from "react";
import { NavLink, type LinkProps } from "react-router";

const Link: React.FC<LinkProps> = ({children, ...props}) => {

    return(
        <>
            <NavLink className={({isActive}) =>
                isActive ? "navLink" : "navLink"
                }
                {...props}
            >
                {children}
            </NavLink>
        </>
    )
}

export default Link;