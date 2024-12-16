import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Context initialization
export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

// PropTypes for type checking (optional)
DarkModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DarkModeProvider;
