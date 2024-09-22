const body = document.querySelector("body"),
	toggleSwitch = document.querySelector(".toggle"),
	root = document.querySelector(":root"),
	sidebarSwitch = document.querySelector(".bx-chevron-left"),
	aside = document.querySelector("aside"),
	modeText = document.querySelector(".dark-light span"),
	searchContainer = document.querySelector(".search-container"),
	search = document.querySelector("[type = 'search']"),
	mainParagraph = document.querySelector("main p"),
	dropdownMenuMain = document.querySelector(".more .main"),
	dropdownMenu = document.querySelector(".more"),
	sidebarLinks = document.querySelectorAll(".menu-bar a"),
	moreLinks = dropdownMenu.querySelectorAll("a");

// Dark Mode Toggle
toggleSwitch.addEventListener("click", () => {
	toggleSwitch.classList.toggle("dark-active");
	root.classList.toggle("dark-active");
	body.classList.toggle("dark-active");
	if (toggleSwitch.classList.contains("dark-active")) {
		modeText.innerHTML = "Dark Mode";
		mainParagraph.innerHTML = "Have a peaceful night and sweet dreams";
	} else {
		modeText.innerHTML = "Light Mode";
		mainParagraph.innerHTML = "Have a nice day";
	}
});
// Sidebar Switch
sidebarSwitch.onclick = function () {
	aside.classList.toggle("close");
	if (aside.classList.contains("close")) {
		disableDropdown();
		dropdownMenu.classList.add("dropdown-sideClose");
	} else {
		dropdownMenu.classList.remove("dropdown-sideClose");
	}
};
// Search Input
searchContainer.onclick = function () {
	aside.classList.remove("close");
	search.focus();
};
// Dropdown Menu
dropdownMenuMain.onclick = function () {
	dropdownMenuMain.classList.toggle("active");
	dropdownMenu.classList.toggle("active");
	if (aside.classList.contains("close")) {
		disableDropdown();
	}
};
// Disable Dropdown Menu
function disableDropdown() {
	dropdownMenuMain.classList.remove("active");
	dropdownMenu.classList.remove("active");
}
// Activate Sidebar Links
sidebarLinks.forEach(function (ele) {
	ele.onclick = function () {
		sidebarLinks.forEach((a) => a.classList.remove("active"))
		this.classList.add("active");
		dropdownMenu.style.backgroundColor = "";
		dropdownMenuMain.style.color = "";
		moreLinks.forEach(function (b) {
			if (b.classList.contains("active")) {
				dropdownMenu.style.backgroundColor = "var(--second-color)";
				dropdownMenuMain.style.color = "var(--dropdown-color)";
			}
		})
	};
});



