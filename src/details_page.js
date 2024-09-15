const params = new URLSearchParams(window.location.search);
const q = params.get("q");
const description = params.get("description");
const category = params.get("category");

const binNameElement = document.querySelector(".bin_name")
const binDescriptionElement = document.querySelector(".bin_description")
const binCategoryElement = document.querySelector(".bin_category")

document.title += ` | ./${q}`;

binNameElement.innerHTML = `./${q}`;
binDescriptionElement.innerHTML = description
binCategoryElement.innerHTML = category

const showScriptContent = (binName) => {
  const scriptContent = document.querySelector(".script_content")

  fetch(`../public/bins/${binName}`)
    .then(response => response.text())
    .then(data => {
      scriptContent.innerHTML = `
          <pre data-prefix="~"><code>${data}</code></pre>
      `
    })
    .catch(error => console.error("Error fetching the file:", error))
}

showScriptContent(q)