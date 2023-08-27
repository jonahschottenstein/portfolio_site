const handleSectionClick = (e) => {
	if (!e.target.matches("section")) return;
	if (e.target.classList.contains("section-expanded")) return;

	e.target.classList.add("section-expanded");
	e.target.parentElement.classList.add("child-expanded");
};

const handleExitClick = (e) => {
	if (!e.target.matches(".exit-button")) return;

	const section = e.target.parentElement;
	section.classList.remove("section-expanded");
	section.parentElement.classList.remove("child-expanded");
};

document.addEventListener("click", handleSectionClick);
document.addEventListener("click", handleExitClick);
