/**
 * JAVASCRIPT FOR CONTRACT PAGE
 */

/**
 * Toggles the display of the navigation menu links when the user clicks on the hamburger menu bar icon
 */
function toggleMenu() {
    const navLinksSmallScreen = document.getElementById("navLinksSmallScreen");
    if (!navLinksSmallScreen) return;

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, newInnerHTML) {
    if (document.getElementById(elementId)) {
        document.getElementById(elementId).innerHTML = newInnerHTML;
    }
}

// Gets key values from URL
const values = Object.fromEntries(new URLSearchParams(window.location.search))

/**
 * For each key in values, update the corresponding HMTL element with the relevant data
 */
Object.keys(values).forEach(
    key => {
        updateHTMLElement(key, values[key].toString())
    }
)