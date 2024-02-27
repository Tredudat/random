document.addEventListener("DOMContentLoaded", function() {
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
