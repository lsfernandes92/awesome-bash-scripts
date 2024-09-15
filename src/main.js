const binsJson = [
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
const binsContainer = document.querySelector(".container__bins_section-wrapper")
const categoriesElements = document.querySelectorAll(".superior__item")

const goToBinScriptPage = (binObject) => {
  const bin = JSON.parse(decodeURIComponent(binObject));
  
  const params = new URLSearchParams({
     q: bin.name,
     description: bin.description,
     category: bin.category
  });
  window.location.href = `../src/details_page.html?${params.toString()}`;
} 

const listBins = () => {
  binsJson.forEach(obj => {
    const serializedObj = encodeURIComponent(JSON.stringify(obj));

    binsContainer.innerHTML += `
      <li class="bins__item mockup-code flex flex-row">
        <div class="binary-card p-8">
          <pre data-prefix="$"><code class="binary-name"><a href="#" name="${obj.name}" onclick="goToBinScriptPage('${serializedObj}')">./${obj.name}</a></code></pre>
          <pre data-prefix=">" class="text-success"><code class="binary-description">${obj.description}</code></pre>
          <pre data-prefix=">" class="text-warning"><code class="binary-category">${obj.category}</code></pre>
        </div>
      </li>
    `
  })  
}

listBins()

categoriesElements.forEach(element => {
  const categoryName = element.textContent.toLowerCase()

  element.addEventListener("click", () => filterByCategory(categoryName))
})

const filterByCategory = (category) => {
  const bins = document.querySelectorAll(".bins__item")

  bins.forEach(element => {
    const binCategory = element.querySelector(".binary-category").textContent.toLowerCase()

    element.style.display = category.includes(binCategory) || category == "all" ? "block" : "none"

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
  category.style.color = "#FFBE00"
 }

 const unhighlightElement = (category) => {
  category.classList.remove("badge", "badge-outline", "badge-neutral")
  category.classList.add("badge", "badge-neutral", "badge-outline")
  category.style.removeProperty("color");
 }