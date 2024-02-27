document.addEventListener("DOMContentLoaded", function() {
 // Animation for profile picture
 gsap.to(".profile-image", { duration: 2, x: 100, opacity: 1, rotation: 360 });

 // Animation for big picture
 gsap.to(".big-picture img", { duration: 2, y: -100, opacity: 1, scale: 1 });

 const homeButton = document.querySelector(".navbar-link[href='#']");
 const updatesButton = document.querySelector(".navbar-link[href='updates.html']");

 homeButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "https://tredudat.github.io/my-website/";
 });

 updatesButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "https://tredudat.github.io/my-website/updates.html";
 });
});
