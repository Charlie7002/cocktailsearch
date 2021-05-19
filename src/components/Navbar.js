import React from "react";
import { Link } from "react-router-dom";
import cocktailLogo from "../cocktail-logo.png";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/">
					<div className="wrap-logo">
						<img src={cocktailLogo} alt="home" className="logo" />
						<h4>Cocktails finder</h4>
					</div>
				</Link>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
