const categorySelect = (event) => {
	event.preventDefault();
	const selection = document.querySelector("#genrePicker").value;
	document.location.replace(`/category/${selection}`);
};

document
	.querySelector(".category-select")
	.addEventListener("submit", categorySelect);
