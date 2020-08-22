import React from "react";
import NavBar from "./Navbar";



const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <NavBar />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
