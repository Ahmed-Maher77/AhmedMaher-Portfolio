import React from "react";
import "./About.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Bio from "./Bio";


const About = () => {
	return (
		<div className="About-Page section-layout mb-14">
			<SectionHeading
				title="About Me"
				description="The Person Behind the Code"
			/>
			<Bio />
		</div>
	);
};

export default About;
