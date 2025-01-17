import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Outlined_Btn({ link, title }) {
	return (
		<button
			type="button"
			className="purple-outline-hover border-purple font-semibold rounded-lg overflow-hidden trans-3 animated-arrow"
		>
			<NavLink
				to={link}
				className="flex items-center gap-3 p-[12px] px-4"
				title={title}
			>
				{title}
				<i className="bx bx-arrow-back rotate-180 font-semibold"></i>
			</NavLink>
		</button>
	);
}

export default Outlined_Btn;
