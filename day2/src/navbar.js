//import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"
import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar nav-links navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#"><img className="logo" src="logo.svg"/></a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;