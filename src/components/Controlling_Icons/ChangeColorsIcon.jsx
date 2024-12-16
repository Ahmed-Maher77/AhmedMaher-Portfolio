import React from "react";
import "./FloatingIcons.scss";

// Container for the color mode icon button
const ChangeColorsIcon = ({setShowColorsBox}) => {
	return (
		<section className="ChangeColorsIcon" onClick={() => setShowColorsBox(prev => !prev)}>
			<div
				className="color-mode white-bg rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer"
				aria-label="Change color settings"
				role="button"
				tabIndex={0}
			>
				<i className="bx bxs-cog text-[1.5rem] black-c setting-icon"></i>
			</div>
		</section>
	);
};

export default ChangeColorsIcon;
