import "./App.scss";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home.jsx";
import Overlay from "./components/Overlay/Overlay.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { DarkModeContext } from "./contexts/DarkModeContext.jsx";
import { SidebarContext } from "./contexts/SidebarContext.jsx";
import FloatingIcons from "./components/Controlling_Icons/FloatingIcons.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
	const [activeLoader, setActiveLoader] = useState(true);
	const { pathname } = useLocation();
	const { isDarkMode } = useContext(DarkModeContext);
	const { activeBar } = useContext(SidebarContext);
	const [showTopBtn, setShowTopBtn] = useState(false);

	// Loader timeout logic
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setActiveLoader(false);
		}, 2000);
		return () => clearTimeout(timeOutId);
	}, []);

	// Apply dark mode based on context
	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	// Manage Up To Top Button Visibility
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{false ? (
				<Loader />
			) : (
				<div className="App lg:flex pt-[68px] lg:pt-0 min-h-svh">
					{activeBar && <Overlay />}
					<Sidebar />
					<FloatingIcons />

					{/* Up To To Button */}
					<button
						type="button"
						className={`bx bx-arrow-back text-[1.3rem] purple-bg gray-bg-l_hover w-[45px] h-[45px] flex justify-center items-center rotate-90 fixed rounded-full text-white trans-3 bottom-4 ${showTopBtn? "right-4" : "right-[-100px]"}`}
						onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
					></button>

					{pathname !== "/admin-panel" && <Navbar />}

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/admin-panel" element={<Dashboard />} />
						{/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
					</Routes>
				</div>
			)}
		</>
	);
}

export default App;
