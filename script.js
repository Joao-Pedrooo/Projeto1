function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "joao Pedro Online Gostoso")
  } else {
    alt.setAttribute("alt", "joao Pedro offline")
  }
}
