import React, { useContext, useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import Logo from "../Logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";

const SidebarLink = ({
	to,
	title,
	iconClass,
	compressSidebar,
	onClick,
	label,
}) => (
	<li>
		<NavLink
			onClick={onClick}
			to={to}
			title={title}
			className={`px-[12px] py-[10px] flex items-center ${
				compressSidebar && "justify-center"
			}`}
		>
			<i
				className={`${iconClass} ${
					!compressSidebar && "me-[15px]"
				} text-[1.3rem]`}
			></i>
			{!compressSidebar && label}
		</NavLink>
	</li>
);

const Sidebar = () => {
	const [compressSidebar, setCompressSidebar] = useState(false);
	const { activeBar, setActiveBar } = useContext(SidebarContext);
	const sidebarRef = useRef(null);
	const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

	useEffect(() => {
		const handleClickOutside = (e) => {
			const triggerBtn = document.querySelector(".bx-menu-burger-icon");
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(e.target) &&
				e.target !== triggerBtn
			) {
				setActiveBar(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [setActiveBar]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setActiveBar(false);
			} else {
				setCompressSidebar(false);
			}
		};
		const debouncedResize = debounce(handleResize, 200); // Debounce resize handler
		window.addEventListener("resize", debouncedResize);
		return () => window.removeEventListener("resize", debouncedResize);
	}, [setActiveBar]);

	function handleSidebar() {
		if (window.innerWidth < 1024) {
			setActiveBar(false);
		} else {
			setCompressSidebar((prev) => !prev);
		}
	}

	return (
		<ul
			ref={sidebarRef}
			className={`sidebar font-medium fixed lg:sticky lg:top-0 top-0 left-0 nav-bg h-screen w-[237px] lg:max-w-[237px] lg:min-w-[237px] text-[1rem] flex ${
				!activeBar && "left-[-350px]"
			} trans-3 ${compressSidebar && "lg:w-[80px] lg:min-w-[80px] lg:max-w-[80px]"}`}
		>
			<div className="wrapper h-full w-full p-[12px] flex flex-col justify-between overflow-y-auto">

			
			<div className="w-full flex flex-col gap-2  nav-bg">
				{/* =============== Header =============== */}
				<li className="mb-12 flex justify-between">
					<Logo compressSidebar={compressSidebar} />
					<div className="arrow-trigger absolute right-[-12.5px] top-[1.5rem] w-[25px] h-[25px] purple-bg flex items-center justify-center rounded-full">
						<i
							onClick={handleSidebar}
							className={`bx bx-chevron-left text-[1.1rem] trans-3 cursor-pointer text-white ${
								compressSidebar && "rotate-180"
							}`}
						></i>
					</div>
				</li>

				{/* =============== Body =============== */}
				<SidebarLink
					to="/"
					title="go to the home page"
					iconClass="bx bx-home-alt"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Home"
				/>
				<SidebarLink
					to="/about"
					title="go to the About Me & Skills page"
					iconClass="bx bx-user"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="About Me & Skills"
				/>
				<SidebarLink
					to="/services"
					title="go to the Services & Testimonials page"
					iconClass="bx bx-comment-check"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Services & Reviews"
				/>
				<SidebarLink
					to="/projects"
					title="go to the Projects (Portfolio) page"
					iconClass="bx bx-briefcase-alt-2"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Projects (Portfolio)"
				/>
				<SidebarLink
					to="/education"
					title="go to the Education page"
					iconClass="bx bx-book-reader"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Education"
				/>
				<SidebarLink
					to="/work-experience"
					title="go to the Work Experience page"
					iconClass="bx bx-code-alt"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Work Experience"
				/>
				<SidebarLink
					to="/contact"
					title="go to the Contact page"
					iconClass="bx bx-chat"
					compressSidebar={compressSidebar}
					onClick={() => setActiveBar(false)}
					label="Contact"
				/>

				{/* =============== Footer =============== */}

			</div>
							<footer
					className={`dashboard mt-7 pt-2 border-t-2 ${
						compressSidebar && "compressed"
					}`}
				>
					<SidebarLink
						to="/admin-panel"
						title="go to the Admin Panel"
						iconClass="bx bx-lock-open"
						compressSidebar={compressSidebar}
						onClick={() => setActiveBar(false)}
						label="Admin Panel"
					/>
					<li
						className={`main-bg ${
							compressSidebar ? "px-[5px]" : "px-[12px]"
						} py-[10px] flex items-center rounded-[8px] justify-between mt-1`}
					>
						{!compressSidebar && (
							<>
								{isDarkMode ? (
									<i className="bx bx-moon text-[1.3rem]"></i>
								) : (
									<i className="bx bx-sun text-[1.3rem]"></i>
								)}
								{isDarkMode ? "Dark" : "Light"} Mode
							</>
						)}
						<div
							onClick={() => setIsDarkMode((prev) => !prev)}
							className={`h-[22px] w-[44px] gray-bg-l rounded-xl p-1 cursor-pointer flex items-center ${
								isDarkMode && "justify-end"
							}`}
							role="button"
							aria-pressed={isDarkMode}
							aria-label="Toggle dark mode"
							tabIndex={0}
							onKeyDown={(e) =>
								e.key === "Enter" && setIsDarkMode((prev) => !prev)
							}
						>
							<div className="h-[15px] w-[15px] white-bg rounded-xl"></div>
						</div>
					</li>
				</footer>
				</div>
		</ul>
	);
};

// Helper function for debouncing
function debounce(func, delay) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), delay);
	};
}

export default Sidebar;
