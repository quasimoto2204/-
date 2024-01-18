"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Query all elements with the class "icon"
    const icons = document.querySelectorAll(".icon");
  
    // Loop through each icon and apply the animation with a delay
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("animated"); // "animated" is the animation class
      }, 200 * index); // 0.2 seconds delay multiplied by the index
    });
  });
  