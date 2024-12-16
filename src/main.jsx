import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "boxicons/css/boxicons.min.css";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SidebarContext from "./contexts/SidebarContext.jsx";
import DarkModeContext from "./contexts/DarkModeContext.jsx";
import ChangeColorsContext from "./contexts/ChangeColorsContext.jsx";
// Lordicon
import "https://cdn.lordicon.com/lordicon.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<SidebarContext>
				<DarkModeContext>
				<ChangeColorsContext>
					<App />
				</ChangeColorsContext>
				</DarkModeContext>
			</SidebarContext>
		</BrowserRouter>
	</StrictMode>
);
