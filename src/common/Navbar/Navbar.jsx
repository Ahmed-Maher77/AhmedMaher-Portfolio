import Logo from "../Logo/Logo.jsx";
import "./Navbar.scss";
import { useContext } from "react";
import ChangeModeIcon from "../../components/Controlling_Icons/ChangeModeIcon.jsx";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";

const Navbar = () => {
	const { activeBar, setActiveBar } = useContext(SidebarContext);

	// Toggle sidebar state
	const toggleSidebar = () => {
		setActiveBar((prev) => !prev);
	};

	// Icon class based on activeBar state
	const menuIconClass = `bx bx-menu bx-menu-burger-icon text-5xl cursor-pointer trans-3 ${activeBar ? 'purple-c' : 'black-c'}`;

	return (
		<nav className="navbar nav-bg fixed top-0 w-screen lg:hidden">
			<div className="flex justify-between items-center py-2 px-7 lg:px-11">
				<Logo disabled={true} />
				
				{/* Right Side */}
				<div className="right flex items-center gap-4 md:gap-9">
					{/* Color Mode */}
					<ChangeModeIcon />
					
					{/* Sidebar Toggle Icon */}
					<i
						onClick={toggleSidebar}
						className={menuIconClass}
					></i>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
