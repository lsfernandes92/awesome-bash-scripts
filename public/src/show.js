const params = new URLSearchParams(window.location.search)
const q = params.get("q")
const description = params.get("description")
const category = params.get("category")

const binNameElement = document.querySelector(".bin-name")
const binDescriptionElement = document.querySelector(".bin-description")
const binCategoryElement = document.querySelector(".bin-category")
const copyButton = document.querySelector(".copy-button")

document.title += ` | ./${q}`

binNameElement.innerHTML = `./${q}`
binDescriptionElement.innerHTML = description
binCategoryElement.innerHTML = category

const copyToClipboard = () => {
  const scriptContent = document.querySelector(".language-ruby")
  const copiedToolTip = document.querySelector(".copied-tooltip")

  const textToCopy = scriptContent.textContent

  navigator.clipboard.writeText(textToCopy)
  .then(() => {
      copiedToolTip.style.display = "block"
      setTimeout(() => {
        copiedToolTip.style.display = "none"
      }, 2000)
    })
    .catch(err => {
      console.error('Error in copying text: ', err)
    })
}
copyButton.addEventListener("click", () => copyToClipboard())

const showScriptContent = (binName) => {
  const scriptContent = document.querySelector(".language-ruby")

  fetch(`../bins/${binName}`)
    .then(response => response.text())
    .then(data => {
      scriptContent.innerHTML = data
      hljs.highlightAll()
    })
    .catch(error => console.error("Error fetching the file:", error))
}

showScriptContent(q)