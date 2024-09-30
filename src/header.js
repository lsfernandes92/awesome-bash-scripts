export const prependHeaderToPage = () => {
  const navbarElement = document.createElement("div")
  const navbarCenterElement = document.createElement("div")
  const btnGhostElement = document.createElement("a")
  const logoImgElement = document.createElement("img")
  const awesomeBashScriptsParagraphElement = document.createElement("p")

  navbarElement.classList.add("navbar", "bg-base-100")
  navbarCenterElement.classList.add("navbar-center")
  btnGhostElement.classList.add("btn", "btn-ghost", "text-xl")
  logoImgElement.src = "../public/images/logo.png"
  logoImgElement.alt = "Awesome bash scripts logo"
  awesomeBashScriptsParagraphElement.textContent = "Awesome Bash Scripts"

  btnGhostElement.appendChild(logoImgElement)
  btnGhostElement.appendChild(awesomeBashScriptsParagraphElement)
  navbarCenterElement.appendChild(btnGhostElement)
  navbarElement.appendChild(navbarCenterElement)

  document.body.prepend(navbarElement);
}