import { useEffect, useState } from "react";
import "./AnimatedTitles.scss";

const AnimatedTitles = () => {
    const [myTitle, setMyTitle] = useState(""); // Current displayed text
	const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting
	const [loopIndex, setLoopIndex] = useState(0); // Current title index
	const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed in ms

	// Array of titles to cycle through
	const titles = [
		"Software Engineer",
		"Full Stack Developer",
		"Frontend Developer",
	];

	useEffect(() => {
		const currentTitle = titles[loopIndex % titles.length]; // Get current title
		let timeout;

		if (isDeleting) {
			// Deleting text
			timeout = setTimeout(() => {
				setMyTitle((prev) => prev.slice(0, -1)); // Remove last character
				if (myTitle === "") {
					setIsDeleting(false); // Switch to typing mode
					setLoopIndex((prev) => prev + 1); // Move to the next title
				}
			}, typingSpeed);
		} else {
			// Typing text
			timeout = setTimeout(() => {
				setMyTitle(currentTitle.slice(0, myTitle.length + 1)); // Add next character
				if (myTitle === currentTitle) {
					setIsDeleting(true);
					setTypingSpeed(150); // Optional: Change speed for deleting
				}
			}, typingSpeed);
		}

		return () => clearTimeout(timeout);
	}, [myTitle, isDeleting, loopIndex, typingSpeed, titles]);

	return (
		<div className="font-medium text-[23px] lg:text-[30px] overflow-hidden mb-4">
			<span className="relative">I'm a </span>
			<span className="relative purple-c">{myTitle}</span>
			<span className="blinking-cursor"></span> {/* Cursor effect */}
		</div>
	);
};

export default AnimatedTitles;
