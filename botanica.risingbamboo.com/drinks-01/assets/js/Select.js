
  document.addEventListener("DOMContentLoaded", function () {
    document.body.style.userSelect = "none";

    // Also disable text selection via mouse
    document.body.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });

    // For older browsers (optional)
    document.body.setAttribute("unselectable", "on");
    document.body.style.webkitUserSelect = "none"; 
    document.body.style.msUserSelect = "none";     
    document.body.style.MozUserSelect = "none";   
  });

