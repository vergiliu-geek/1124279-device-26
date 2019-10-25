

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
    showNavigation = document.querySelector(".main-nav"),
    showNavigationLink = document.querySelector(".catalog-icon"),
    headerLink = document.querySelector(".main-header");
mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("popup-active");
  });
writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("popup-active");
});
aboutUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("popup-active");
  });
popupCloseMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("popup-active");
});
popupCloseUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("popup-active");
    writeForm.classList.remove("write-us-animation");
});
writeForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      writeForm.classList.add("write-us-animation");
    }
  });
 

  showNavigationLink.addEventListener("mouseover", function(){
    showNavigation.classList.add("popup-active");
  });
  headerLink.addEventListener("mouseout", function(){
    showNavigation.classList.remove("popup-active");
  }); 