function change_theme(page) {
  var changer = document.getElementById("theme-changer");
  if (document.getElementById("dark-light-btn").innerHTML == "theme 1") {
    document.getElementById("dark-light-btn").innerHTML = "theme 2";
    changer.href = page + "1.css";
  } else {
    document.getElementById("dark-light-btn").innerHTML = "theme 1";
    changer.href = page + "2.css";
  }
}
