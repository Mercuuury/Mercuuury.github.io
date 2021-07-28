var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "styles/light.css";
  let darkTheme = "styles/dark.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
    document.querySelector('.theme-img').src = "img/icon-theme-light.svg";
  } else {
    currTheme = lightTheme;
    theme = "light";
    document.querySelector('.theme-img').src = "img/icon-theme-dark.svg";
  }

  link.setAttribute("href", currTheme);
}
