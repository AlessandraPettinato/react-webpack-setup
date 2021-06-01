import React from "react";
import { Link } from "react-router-dom";

import TestHome from "./TestHome";

export default function TestHeader() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/route1">Go to Route </Link>
				</li>
				<li>
					<Link to="/route2">Go to Route 2</Link>
				</li>
			</ul>
		</nav>
	);
}
