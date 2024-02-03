function myFunction() {
    var x = document.getElementById("more-stories");


    // check if x.style.display doesn't exist
    if (x.style.display === "none" || !x.style.display) {
      x.style.display = "flex";
      console.log("x.style.display is none");
    } else {
      x.style.display = "none";
      console.log("x.style.display is not none");

    }
  }