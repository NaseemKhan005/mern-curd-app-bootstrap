// responsive navigation bar
let navLinks = document.getElementById("nav-links");

navLinks.style.maxHeight = "0px";

function openNav() {
	if (navLinks.style.maxHeight == "0px") {
		navLinks.style.maxHeight = "250px";
	} else {
		navLinks.style.maxHeight = "0";
	}
}

// window scrolling
document.getElementById("scroll").addEventListener("click", () => {
	window.scroll(0, 0);
});

// changing images
let largeImg = document.getElementById("large-img");
function changeImg(img) {
	largeImg.src = img.src;
}

// form
let loginForm = document.getElementById("login-form");
let registerForm = document.getElementById("register-form");
let toggleLine = document.getElementById("toggle-line");

function loginFunction() {
	loginForm.style.left = "0px";
	registerForm.style.left = "320px";
	toggleLine.style.left = "60px";
}

function registerFunction() {
	registerForm.style.left = "0px";
	loginForm.style.left = "-320px";
	toggleLine.style.left = "160px";
}

// getting year
let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
