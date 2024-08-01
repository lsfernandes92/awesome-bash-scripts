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
  }
]
const binariesContainer = document.querySelector(".binaries__container")

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