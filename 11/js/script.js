var map = document.querySelector(".map"),
	mapLink = document.querySelector(".map-img"),
	writeUs = document.querySelector(".write-us"),
	writeUsLink = document.querySelector(".button-contacts"),
	popupCloseMap = document.querySelector(".close-button"),
	popupCloseUs = document.querySelector(".write-us-close"),
	name = document.querySelector(".name"),
	email = document.querySelector(".email"),
	writeForm = document.querySelector(".form-info"),
	aboutUsLink = document.querySelector(".about-us-button"),
	showNavigationLink = document.querySelector(".catalog-button"),
	showNavigation = document.querySelector(".main-nav"),
	overlay = document.querySelector(".overlay");


showNavigationLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	showNavigation.classList.toggle("popup-active");
});
mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("popup-active");
	overlay.classList.add("overlay-display");
});
writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.add("popup-active");
	overlay.classList.add("overlay-display");

});
aboutUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.add("popup-active");
	overlay.classList.add("overlay-display");
});
popupCloseMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.remove("popup-active");
	overlay.classList.remove("overlay-display");
});
popupCloseUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.remove("popup-active");
	writeForm.classList.remove("write-us-animation");
	overlay.classList.remove("overlay-display");
});
writeForm.addEventListener("submit", function (evt) {
	if (!name.value || !email.value) {
		evt.preventDefault();
		writeForm.classList.add("write-us-animation");
	}
});
