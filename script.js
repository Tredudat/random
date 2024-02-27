document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.querySelector("nav a[href='#']");
    const updatesButton = document.querySelector("nav a[href='updates']");
  
    homeButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "https://tredudat.github.io/my-website/";
    });
  
    updatesButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "https://tredudat.github.io/my-website/updates.html";
    });
  });