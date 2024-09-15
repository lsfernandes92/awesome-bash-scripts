const binariesJson = [
  {
    "name": "add-bins",
    "description": "Make individual bin executable system-wide.",
    "category": "utils"
  },
  {
    "name": "rimshot",
    "description": "Simply plays a rimshot sound.",
    "category": "useless"
  },
  {
    "name": "e",
    "description": "Quick shortcut to an editor.",
    "category": "productivity"
  }
]
const binariesContainer = document.querySelector(".container__binaries_section-wrapper")
const categoriesElements = document.querySelectorAll(".superior__item")
const binariesElements = document.querySelectorAll(".binaries__item")

const goToBinaryScriptPage = (binObject) => {
  const bin = JSON.parse(decodeURIComponent(binObject));
  
  const params = new URLSearchParams({
     q: bin.name,
     description: bin.description,
     category: bin.category
  });
  window.location.href = `details_page.html?${params.toString()}`;
} 

const listBinaries = () => {
  binariesJson.forEach(obj => {
    const serializedObj = encodeURIComponent(JSON.stringify(obj));

    binariesContainer.innerHTML += `
      <li class="binaries__item mockup-code flex flex-row">
        <div class="binary-card p-8">
          <pre data-prefix="$"><code class="binary-name"><a href="#" name="${obj.name}" onclick="goToBinaryScriptPage('${serializedObj}')">./${obj.name}</a></code></pre>
          <pre data-prefix=">" class="text-success"><code class="binary-description">${obj.description}</code></pre>
          <pre data-prefix=">" class="text-warning"><code class="binary-category">${obj.category}</code></pre>
        </div>
      </li>
    `
  })  
}

listBinaries()

categoriesElements.forEach(element => {
  const categoryName = element.textContent.toLowerCase()

  element.addEventListener("click", () => filterByCategory(categoryName))
})

const filterByCategory = (category) => {
  const binaries = document.querySelectorAll(".binaries__item")

  binaries.forEach(element => {
    const binaryCategory = element.querySelector(".binary-category").textContent.toLowerCase()

    element.style.display = category.includes(binaryCategory) || category == "all" ? "block" : "none"

    highlightCategoryElement(category)
  });
}

const highlightCategoryElement = (categoryToHighlight) => {
  const categories = document.querySelectorAll(".superior__item")

  categories.forEach(element => {
    unhighlightElement(element)

    const categoryName = element.textContent.toLowerCase()
    
    if (categoryName == categoryToHighlight) {
      highlightElement(element)
    }
  })
}
 const highlightElement = (category) => {
  category.classList.remove("badge", "badge-outline", "badge-neutral")
  category.classList.add("badge", "badge-outline")
 }

 const unhighlightElement = (category) => {
  category.classList.remove("badge", "badge-outline", "badge-neutral")
  category.classList.add("badge", "badge-neutral", "badge-outline")
 }