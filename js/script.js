const body = document.querySelector("body");
const heading = document.querySelector("h1");
const faveQuincy = document.querySelector("#favorite");
let selection = "Regular Quincy";

body.addEventListener("keydown", changeMode);

function changeMode(e) {
	return e.key === "l"
		? body.classList.add("light")
		: e.key === "d"
		? body.classList.remove("light")
		: 0;
}

faveQuincy.addEventListener("change", changeSelection);

function changeSelection(e) {
	selection = e.target.value;
	if (selection === "stealth") {
		heading.innerText = `Stealth Quincy 😎`;
	} else if (selection === "party") {
		heading.innerText = `Party QUINCY 🥳`;
	} else {
		heading.innerText = "Quincy";
	}
}
