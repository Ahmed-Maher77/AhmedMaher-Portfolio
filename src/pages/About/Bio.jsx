import React, { useEffect, useState } from "react";
import myPicture from "../../assets/My_Picture_3.jpg";
import SeeResumeBtn from "../../components/Home_Buttons/SeeResumeBtn";
import Outlined_Btn from "../../components/Home_Buttons/Outlined_Btn";
import { socialMedia } from "../../components/Social_Media/SocialMedia";

const Bio = () => {
    const [summarizedText, setSummarizedText] = useState(
		window.innerWidth < 1280
	);

	useEffect(() => {
		const handleResize = () => setSummarizedText(window.innerWidth < 1280);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<main className="flex flex-col gap-8 xl:flex-row xl:justify-between">
			{/* ========== Image ========== */}
			<figure className="max-xl:mx-auto max-xl:max-w-[300px] rounded-md overflow-hidden h-fit xl:w-[50%] max-w-[450px]">
				<img
					className="block w-full"
					src={myPicture}
					alt="Ahmed Maher's Picture"
				/>
				{/* ====== Image Effects ====== */}
				<figcaption className="flex justify-center items-center">
					<div className="flex justify-center items-center gap-3 flex-wrap max-w-[85%]">
						{socialMedia.map((social, i) => (
							<a
								className="block h-fit rounded-full"
								key={i}
								href={
									social.socialName == "gmail"
										? `mailto:${social.socialLink}?subject=Let's work together`
										: social.socialLink
								}
								target="_blank"
								rel="noopener noreferrer"
								title={social.GoTo}
							>
								<i
									className={`bx bxl-${social.iconName} w-[45px] h-[45px] flex justify-center items-center text-xl rounded-full bg-white hover:bg-blue-900 hover:text-white trans-3`}
								></i>
							</a>
						))}
					</div>
				</figcaption>
			</figure>
			{/* ========== Bio ========== */}
			<section className="w-[95%] max-xl:max-w-[700px] max-xl:mx-auto md:text-lg xl:text-base 2xl:text-lg">
				<p>
					I'm Ahmed Maher, a <strong>Frontend Developer</strong> with a{" "}
					<strong>
						Bachelor's in Computer and Control Systems Engineering
					</strong>{" "}
					and a proven track record of delivering diverse web applications, from
					foundational projects to sophisticated, scalable solutions. With
					knowledge of <strong>backend</strong> technologies (MERN), I am
					equipped to deliver <strong>full-stack</strong> solutions
					<span>
						{" "}
						{summarizedText ? (
							<span
								className="underline purple-c cursor-pointer hover:font-semibold"
								onClick={() => setSummarizedText(false)}
							>
								...more
							</span>
						) : (
							" when needed. I specialize in creating exceptional user experiences, optimizing for SEO, performance, and accessibility, and writing testable, efficient code while adhering to industry best practices. Passionate about translating user needs into innovative digital solutions that drive business success."
						)}
					</span>
					<span className="footer">
						If you're looking for a talented, hardworking team player and quick
						learner, let's connect and make your project a success!
					</span>
				</p>
				{/* ============ Buttons ============ */}
				<div className="btns mt-9 flex justify-center xl:justify-start gap-6 gap-y-4 flex-wrap">
					<SeeResumeBtn />
					<Outlined_Btn link="/contact" title="Contact Me" />
				</div>
			</section>
		</main>
	);
};

export default Bio;
