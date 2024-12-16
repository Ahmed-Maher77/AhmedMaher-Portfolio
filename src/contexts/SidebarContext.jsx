import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Context initialization
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
	const [activeBar, setActiveBar] = useState(false);

	return (
		<SidebarContext.Provider value={{ activeBar, setActiveBar }}>
			{children}
		</SidebarContext.Provider>
	);
};

// PropTypes for type checking (optional)
SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SidebarProvider;
