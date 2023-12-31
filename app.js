function handleScrollTop(e) {
	if (this.classList.contains("section-expanded")) return;
	if (e.propertyName !== "height") return;

	const scrollElement =
		this.id === "projects-section"
			? this.querySelector(".projects-wrapper")
			: this.querySelector(".section-content");

	scrollElement.scrollTop = 0;
}

const handleSectionScrollTop = (section, eventAction) =>
	section[eventAction]("transitionend", handleScrollTop);

const handleSectionClick = (e) => {
	if (!e.target.matches("section")) return;
	if (e.target.classList.contains("section-expanded")) return;

	e.target.classList.add("section-expanded");
	e.target.parentElement.classList.add("child-expanded");

	const sections = document.querySelectorAll(
		"#about-section, #projects-section, #skills-section, #contact-section"
	);

	sections.forEach((section) => {
		handleSectionScrollTop(section, "removeEventListener");
	});
};

const handleExitClick = (e) => {
	if (!e.target.matches(".exit-button")) return;

	const section = e.target.parentElement;
	section.classList.remove("section-expanded");
	section.parentElement.classList.remove("child-expanded");

	handleSectionScrollTop(section, "addEventListener");
};

document.addEventListener("click", handleSectionClick);
document.addEventListener("click", handleExitClick);
