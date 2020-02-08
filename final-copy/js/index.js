const links = document.querySelectorAll("header nav a");
let url = "http://localhost/mtm1526/final/partials/index.html";
let url = "http://localhost/mtm1526/final/partials/portfolio.html";

function loadContent(urlValue) {
	fetch(urlValue)
		.then()
		.then()
		.catch();
}

function handleClick(ev) {
	ev.preventDefault();
	let clickedLink = ev.target;
	url = clickedLink.href;
	loadContent(url);
}

for (let link of links) {
	link.addEventListener("click", handleClick);
}