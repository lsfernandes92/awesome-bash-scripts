export const prependHeaderToPage = (page = "index") => {
  const navbarElement = document.createElement("div")
  const navbarCenterElement = document.createElement("div")
  const btnGhostElement = document.createElement("a")
  const logoImgElement = document.createElement("img")
  const awesomeScriptsParagraphElement = document.createElement("p")

  navbarElement.classList.add("navbar", "bg-base-100")
  navbarCenterElement.classList.add("navbar-center")
  btnGhostElement.classList.add("btn", "btn-ghost", "text-xl")
  logoImgElement.src = page === "index" ? "images/logo.png" : "../images/logo.png"
  logoImgElement.alt = "Awesome scripts logo"
  awesomeScriptsParagraphElement.textContent = "Awesome Scripts"

  btnGhostElement.appendChild(logoImgElement)
  btnGhostElement.appendChild(awesomeScriptsParagraphElement)
  navbarCenterElement.appendChild(btnGhostElement)
  navbarElement.appendChild(navbarCenterElement)

  document.body.prepend(navbarElement);
}