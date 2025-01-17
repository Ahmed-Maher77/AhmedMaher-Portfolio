import React from "react";
import SeeResumeBtn from "./SeeResumeBtn";
import Outlined_Btn from "./Outlined_Btn";

const HomeButtons = ({ justifyContent }) => {
	

	return (
		<div className={`HomeButtons flex gap-4 ${justifyContent} mt-12 flex-wrap`}>
			{/* ========= Resume ========= */}
			<SeeResumeBtn />

			{/* ========= Projects ========= */}
			<Outlined_Btn link="/projects" title="Explore My Projects" />
		</div>
	);
};

export default HomeButtons;
