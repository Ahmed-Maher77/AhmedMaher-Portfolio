import React from "react";
import "./FloatingIcons.scss";

const ShareIcon = () => {
	const handleShare = async () => {
		const shareData = {
			title: "Ahmed Maher - Portfolio",
			text: "Check out my Portfolio to know more about me (Ahmed Maher)!",
			url: window.location.href, // Get the current URL
		};

		if (navigator.share) {
			try {
				await navigator.share(shareData);
			} catch (error) {
				console.error("Error sharing:", error);
			}
		} else {
			alert("Your browser doesn't support the Web Share API.");
		}
	};

	return (
		<div onClick={handleShare} className="shareIcon white-bg rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer">
			<i className="bx bx-share-alt text-[1.5rem] black-c setting-icon"></i>
		</div>
	);
};

export default ShareIcon;
