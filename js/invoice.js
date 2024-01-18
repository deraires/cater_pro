
/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, innerHTML) {
    document.getElementById(elementId).innerHTML = innerHTML
  }

const values = Object.fromEntries(new URLSearchParams(window.location.search))

// console.log(values)
// const persons = values.persons;
const persons = 200
const pricePerPerson = menuDB[values.selectEventMenu].pricePerPerson;
const subTotal = persons * pricePerPerson;
console.log(subTotal)

// updateHTMLElement("clientName", values.clientName);
// updateHTMLElement("clientEmail", values.clientEmail);

Object.keys(values).forEach(
    key => {
        updateHTMLElement(key, values[key].toString())
    }
)