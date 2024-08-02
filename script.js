const binaries = [
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
const binariesContainer = document.querySelector(".binaries__container")
const categories = document.querySelectorAll(".superior__item")

const listBinaries = () => {
  binaries.forEach(binary => {
    binariesContainer.innerHTML += `
      <li class="binaries__item mockup-code flex flex-row">
        <div class="binary-card p-8">
          <pre data-prefix="$"><code class="binary-name">./${binary.name}</code></pre>
          <pre data-prefix=">" class="text-success"><code class="binary-description">${binary.description}</code></pre>
          <pre data-prefix=">" class="text-warning"><code class="binary-category">${binary.category}</code></pre>
        </div>
      </li>
    `
  })  
}

listBinaries()

categories.forEach(category => {
  const categoryName = category.textContent.toLowerCase()

  category.addEventListener("click", () => filterByCategory(categoryName))
})

const filterByCategory = (category) => {
  const binaries = document.querySelectorAll(".binaries__item")

  binaries.forEach(binary => {
    const binaryCategory = binary.querySelector(".binary-category").textContent.toLowerCase()

    binary.style.display = category.includes(binaryCategory) || category == "all" ? "block" : "none"

    highlightCategoryElement(category)
  });
}

const highlightCategoryElement = (categoryToHighlight) => {
  const categories = document.querySelectorAll(".superior__item")

  categories.forEach(category => {
    unhighlightElement(category)

    const categoryName = category.textContent.toLowerCase()
    
    if (categoryName == categoryToHighlight) {
      highlightElement(category)
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