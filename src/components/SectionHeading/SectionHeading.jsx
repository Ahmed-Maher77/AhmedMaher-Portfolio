import React, { useEffect, useState } from "react";
import "./SectionHeading.scss";
import { useLocation } from "react-router-dom";

const SectionHeading = ({ title, description }) => {
	const { pathname } = useLocation();
	const isAboutPage = pathname === "/about";
	const [scroll, setScroll] = useState(isAboutPage && window.scrollY > 32);
	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 32);
		};
		isAboutPage && window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function createLines() {
		return (
			<>
				{Array(3)
					.fill(null)
					.map((_, index) => (
						<span key={index}></span>
					))}
			</>
		);
	}

	return (
		<>
			<header className={`Section-Heading ${scroll && "scroll"}`}>
				<div>
					<div className="before-lines lines">{createLines()}</div>
					<h1 className="main-head">{title}</h1>
					<div className="after-lines lines">{createLines()}</div>
				</div>
			</header>
			<span className="block mt-1 mb-10 text-center">{description}</span>
		</>
	);
};

export default SectionHeading;
