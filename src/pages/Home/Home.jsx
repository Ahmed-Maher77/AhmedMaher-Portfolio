import { useEffect, useState } from "react";
import "./Home.scss";
import SocialMedia from "../../components/Social_Media/socialMedia";
import MainPicture from "../../components/Main_Picture/MainPicture";
import AnimatedTitles from "../../components/Animated_Titles/AnimatedTitles";
import HomeButtons from "../../components/Home_Buttons/HomeButtons";
import MainHeading from "../../components/Main_Heading/MainHeading.jsx";

const Home = () => {
	const [XLScreen, setXLScreen] = useState(window.innerWidth > 1300);

	useEffect(() => {
		const handleResize = () => setXLScreen(window.innerWidth > 1300);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [])

	return (
		<div className={`Home-Page section-layout flex ${XLScreen && "items-center min-h-screen"} overflow-hidden`} style={{paddingTop: "50px", paddingInline: XLScreen && "80px"}}>
			<div className={`w-full flex ${XLScreen? "flex-row-reverse justify-between" : "flex-col"} gap-y-5 items-center`}>
			{XLScreen || <MainHeading />}
			<MainPicture XLScreen={XLScreen} margin="me-3" />

			{/* ======== Text ======== */}
			<main className={`${XLScreen? "text-start" : "text-center mt-5"}`}>
			{XLScreen && <MainHeading textAlign="text-start" />}
				<AnimatedTitles />

				{/* ======== Bio ======== */}
				<p className={`w-11/12 max-w-[700px] ${XLScreen? "ms-0" : "m-auto"}`}>
				Passionate Frontend Developer with a Bachelor's in Computer and Control Systems Engineering. Specialized in creating dynamic, responsive, and accessible web applications that bring ideas to life.
				</p>

				<HomeButtons justifyContent={XLScreen? "justify-start" : "justify-center"} />
				<SocialMedia justifyContent={XLScreen? "justify-start" : "justify-center"} />
			</main>
			</div>
		</div>
	);
};

export default Home;
