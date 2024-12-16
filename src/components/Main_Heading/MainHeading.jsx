import React from "react";

const MainHeading = ({textAlign}) => {
	return (
		<section className={`${textAlign? textAlign : "text-center"}`}>
			<span className="font-semibold">Hello, I'm</span>
			<h1 className="ibm-plex-mono purple-c text-4xl lg:text-[2.7rem] font-semibold my-4 mt-2">
				Ahmed Maher Algohary
			</h1>
		</section>
	);
};

export default MainHeading;
