import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.css'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<button className="btn btn-warning">Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/favorites">
					<button className="btn btn-danger">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
