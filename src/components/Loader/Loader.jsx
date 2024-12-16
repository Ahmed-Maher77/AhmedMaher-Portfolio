import React from "react";
import "./Loader.scss";

const Loader = () => {
	return (
		<div>
			<div id="page">
				<div id="container">
					<div id="ring"></div>
					<div id="ring"></div>
					<div id="ring"></div>
					<div id="ring"></div>
					<div id="h3">Loading</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
