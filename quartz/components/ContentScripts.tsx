import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Runs page-content scripts on every Quartz navigation.
//
// With enableSPA on, Quartz swaps page content in place instead of doing a
// full page load, and it does NOT re-run <script> tags written inside
// markdown. Those scripts only fired after a refresh. Listening for Quartz's
// "nav" event (fired on first load and after every in-site navigation)
// makes them run every time a page is shown.

const script = `
function updateYearsOfExperience() {
  const currentYear = new Date().getFullYear()
  document.querySelectorAll(".year-diff").forEach((span) => {
    const startYear = parseInt(span.dataset.startYear)
    if (isNaN(startYear)) return
    const difference = currentYear - startYear
    span.textContent =
      difference === 1 ? difference + " year of experience" : difference + " years of experience"
  })
}

function setupProjectExpand() {
  const grid = document.querySelector("#content.project-grid")
  if (!grid) return
  const items = Array.from(grid.children).filter((el) => el.classList.contains("hero"))
  const visibleCount = 4
  const hiddenItems = items.slice(visibleCount)
  if (hiddenItems.length === 0) return

  hiddenItems.forEach((item) => item.classList.add("project-hidden"))

  const expandRow = document.querySelector(".expand-row")
  const btn = document.getElementById("project-expand-btn")
  if (!expandRow || !btn) return
  expandRow.style.display = "block"

  let expanded = false
  const onClick = () => {
    expanded = !expanded
    hiddenItems.forEach((item) => item.classList.toggle("project-hidden", !expanded))
    btn.textContent = expanded ? "Show fewer projects" : "View all projects"
  }
  btn.addEventListener("click", onClick)
  window.addCleanup(() => btn.removeEventListener("click", onClick))
}

document.addEventListener("nav", () => {
  updateYearsOfExperience()
  setupProjectExpand()
})
`

const ContentScripts: QuartzComponent = () => null
ContentScripts.afterDOMLoaded = script

export default (() => ContentScripts) satisfies QuartzComponentConstructor
