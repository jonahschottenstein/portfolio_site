const handleExitClick = (e) => {
	if (!e.target.matches(".exit-button")) return;

	const sectionInput = e.target.parentElement.querySelector(
		"input[name='section-input']"
	);

	sectionInput.checked = false;
};

document.addEventListener("click", handleExitClick);
