import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.scss";

// Logo component for brand logo and name display
const Logo = ({ disabled, compressSidebar }) => {
	return (
		<div className="logo-wraper flex gap-3 items-center group cursor-pointer">
			{/* Logo icon as a Link */}
			<div className="logo group w-fit">
				<NavLink
					to="/"
					title={disabled ? "Go to the home page" : "Logo"}
					className={`purple-bg transition duration-[300ms] text-white py-[8px] px-[7px] block text-[20px] font-bold rounded-[5px] ${
						!disabled && "group-hover:bg-slate-700"
					}`}
					onClick={(e) => disabled && e.preventDefault()}  // Disable click if disabled
				>
					AM
				</NavLink>
			</div>
			{/* Show name and title if sidebar is expanded */}
			{!compressSidebar && (
				<div>
					<h4 className="text-lg font-semibold mb-0">
						Ahmed <span>Maher</span>
					</h4>
					<p className="gray-c">Software Engineer</p>
				</div>
			)}
		</div>
	);
};

export default Logo;
