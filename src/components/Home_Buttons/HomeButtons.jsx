import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HomeButtons = ({ justifyContent }) => {
	const [changeEyeColor, setChangeEyeColor] = useState(false);

	return (
		<div className={`HomeButtons flex gap-4 ${justifyContent} mt-12 flex-wrap`}>
			{/* Resume */}
			<button
				className="purple-bg text-white rounded-lg overflow-hidden min-w-fit purple-hover"
				type="button"
				onMouseOver={() => setChangeEyeColor(true)}
				onMouseLeave={() => setChangeEyeColor(false)}
			>
				<a
					className="flex items-center gap-3 p-[8px] px-4 font-medium"
					href="https://drive.google.com/file/d/1slvVrsolRLBon1Mtrfo8NHiIYw4YFhUp/view?usp=sharing"
					target="_blank"
					title="See My Resume"
				>
					My Resume
					<lord-icon
						src="https://cdn.lordicon.com/wepoiyzv.json"
						trigger="loop"
						delay="1000"
						colors={`primary:${
							changeEyeColor ? "#bdbdbd" : "#ffffff"
						},secondary:${changeEyeColor ? "hsl(250, 69%, 61%)" : "#e4e4e4"}`}
					></lord-icon>
				</a>
			</button>

			{/* Projects */}
			<button
				type="button"
				className="purple-outline-hover border-purple font-semibold rounded-lg overflow-hidden trans-3 animated-arrow"
			>
				<NavLink
					to="/projects"
					className="flex items-center gap-3 p-[12px] px-4"
					title="Explore My Projects"
				>
					Explore My Projects{" "}
					<i className="bx bx-arrow-back rotate-180 font-semibold"></i>
				</NavLink>
			</button>
		</div>
	);
};

export default HomeButtons;
