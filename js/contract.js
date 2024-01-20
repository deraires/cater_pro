/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, newInnerHTML) {
    if (document.getElementById(elementId)) {
        document.getElementById(elementId).innerHTML = newInnerHTML;
    }
}

const values = Object.fromEntries(new URLSearchParams(window.location.search))


console.log(values)

// updateHTMLElement("clientName", values.clientName);
// updateHTMLElement("clientEmail", values.clientEmail);

Object.keys(values).forEach(
    key => {
        console.log(key);
        updateHTMLElement(key, values[key].toString())
    }
)

