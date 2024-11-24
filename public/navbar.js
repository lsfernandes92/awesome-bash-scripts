// The goal of this function is to dynamically create the following HTML
// structure using JavaScript:
// 
// The desirable footer structure:
// 
//<navbar>      
//  <a href="./index.html" class="navbar-logo">HOME</a>
//  <div class="navbar-links">
//    <a href="https://github.com/lsfernandes92/awesome-scripts" target="_blank" class="navbar-link">GITHUB</a>
//    <a href="https://ko-fi.com/variosonrails" target="_blank" class="navbar-link">SUPPORT ME</a>
//  </div>
//</navbar>
export const prependNavbarToContainer = () => {
  
  const containerElement = document.querySelector(".container")
  const navbarElement = document.createElement("navbar")

  navbarElement.append(logo())
  navbarElement.append(links())
  containerElement.prepend(navbarElement)
}

const logo = () => {
  const homeLink = document.createElement("a")

  homeLink.href = "./index.html"
  homeLink.classList.add("navbar-logo")
  homeLink.textContent = "HOME"

  return homeLink
}

const links = () => {
  const links = document.createElement("div")
  const githubLink = document.createElement("a")
  const kofiLink = document.createElement("a")

  links.classList.add("navbar-links")
  
  githubLink.href = "https://github.com/lsfernandes92/awesome-scripts"
  githubLink.target = "_blank"
  githubLink.classList.add("navbar-link")
  githubLink.textContent = "GITHUB"

  kofiLink.href = "https://ko-fi.com/variosonrails"
  kofiLink.target = "_blank"
  kofiLink.classList.add("navbar-link")
  kofiLink.textContent = "SUPPORT ME"

  links.appendChild(githubLink)
  links.appendChild(kofiLink)

  return links
}