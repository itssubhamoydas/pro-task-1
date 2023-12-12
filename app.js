/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  /* Change the background color of the navigation bar when the user scrolls down */
  window.onscroll = function() {
    var x = document.getElementById("myTopnav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      x.style.backgroundColor = "#555";
    } else {
      x.style.backgroundColor = "#333";
    }
  };
  
  /* Change the font color of the menu item when the user hovers over it */
  var links = document.querySelectorAll(".topnav a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function() {
      this.style.color = "#04AA6D";
    });
    links[i].addEventListener("mouseout", function() {
      this.style.color = "#f2f2f2";
    });
  }
  