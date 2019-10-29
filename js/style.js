

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
    showNavigationLink = document.querySelector(".catalog-icon"),
    showNavigation = document.querySelector(".main-nav"),
    showOverlay = document.querySelector(".overlay");
 

   
        
showNavigationLink.addEventListener("mouseover",function(evt){
    evt.preventDefault();
    showNavigation.style.display='block';
});
showNavigationLink.addEventListener("click",function(evt){
    evt.preventDefault();
    showNavigation.style.display='none';
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("popup-active");
    showOverlay.style.display='block';
});
writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("popup-active");
    showOverlay.style.display='block';
});
aboutUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("popup-active");
    showOverlay.style.display='block';
});
popupCloseMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("popup-active");
    showOverlay.style.display='none';
});
popupCloseUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("popup-active");
    writeForm.classList.remove("write-us-animation");
    showOverlay.style.display='none';
});
writeForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      writeForm.classList.add("write-us-animation");
    }
});


 

  