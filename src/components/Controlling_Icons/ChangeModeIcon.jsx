import React, { useContext } from "react";
import "./FloatingIcons.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const ChangeModeIcon = () => {
	const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
	// Toggle between dark and light mode
	const toggleMode = () => setIsDarkMode((prev) => !prev);

	return (
		<div
			onClick={toggleMode}
			onKeyDown={(e) => e.key === "Enter" && toggleMode()}
			className={`color-mode white-bg rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer`}
			role="button"
			tabIndex={0}
			aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
		>
			{!isDarkMode ? (
				<i className="bx bx-sun text-[1.55rem] black-c"></i>
			) : (
				<i className="bx bx-moon text-[1.55rem] black-c"></i>
			)}
		</div>
	);
};

export default ChangeModeIcon;
