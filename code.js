function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  

var btn = document.querySelector("#voltartopo");
  btn.addEventListener("click", function() {
      window.scrollTo(0, 0);
  });