function menuX(x) {
  x.classList.toggle("change");
  var carre2 = document.getElementsByClassName("menu-carre-2");
  var carre3 = document.getElementsByClassName("menu-carre-3");
  var carre4 = document.getElementsByClassName("menu-carre-4");

  if (x.classList.contains("change")) {
    carre2[0].classList.remove("menu-carre-2-anim-out");
    carre2[0].classList.add("menu-carre-2-anim");

    carre3[0].classList.remove("menu-carre-3-anim-out");
    carre3[0].classList.add("menu-carre-3-anim");
    document.getElementById("myNav").style.width = "100%";
  } else {
    carre2[0].classList.remove("menu-carre-2-anim");
    carre2[0].classList.add("menu-carre-2-anim-out");

    carre3[0].classList.remove("menu-carre-3-anim");
    carre3[0].classList.add("menu-carre-3-anim-out");

    document.getElementById("myNav").style.width = "0%";
  }
}
