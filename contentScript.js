window.onload = () => {
  let sidebarColumn = null

  let button = null
  let clickEventListener = null

  const showText = 'Show Trends Sidebar'
  const hideText = 'Hide Trends Sidebar'

  const createButton = () => {
    button = document.createElement('button')
    button.classList.add('no-twitter-trends')
    button.textContent = showText
    button.style.position = 'absolute'
    button.style.right = '0'
    sidebarColumn.after(button)
    clickEventListener = () => {
      if (sidebarColumn.style.visibility === 'hidden') {
        sidebarColumn.style.visibility = 'visible'
        button.textContent = hideText
      } else {
        sidebarColumn.style.visibility = 'hidden'
        button.textContent = showText
      }
    }
    button.addEventListener('click', clickEventListener)
  }

  // keep checking until sidebar loads
  const checkElement = () => {
    sidebarColumn = document.querySelector('[data-testid="sidebarColumn"]')
    if (!sidebarColumn) {
      setTimeout(checkElement, 100)
      return
    }
    createButton()
  }

  checkElement()
}
