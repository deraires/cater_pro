/**
 * JAVASCRIPT FOR INVOICE PAGE
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

/**
 * Sets a defaul value to control possible failure errors 
 */
function getValueWithDefault(value, defaultValue) {
    if (value) return value;
    return defaultValue;
}

/**
 * Gives format to the corresponding amounts in euro currency
 */
function formatCurrency(ammount) {
    return ammount.toLocaleString('en-DE', {
        style: 'currency',
        currency: 'EUR',
    })
}

// Gets key values from URL
const values = Object.fromEntries(new URLSearchParams(window.location.search))

// Calculating data for Service detail chart in invoice preview (invoice.html) page 
const persons = getValueWithDefault(values.guestsEventQuantity, 1)
// Calculating subtotal for Package selection
const pricePerPersonPackage = packageDB[values.eventPackage].pricePerPerson;
const subTotalPackage = persons * pricePerPersonPackage;
// Calculating subtotal for Menu selection
const pricePerPersonMenu = menuDB[values.eventMenu].pricePerPerson
const subTotalMenu = persons * pricePerPersonMenu;
// Calculating subtotal for Additional items
const quantityAdditional1 = getValueWithDefault(values.quantityAdditional1, 0)
const subTotalAdditional1 = values.rateAdditional1 * quantityAdditional1
const quantityAdditional2 = getValueWithDefault(values.quantityAdditional2, 0)
const subTotalAdditional2 = values.rateAdditional2 * quantityAdditional2
// Calculating grossTotal for all items in invoice
const grossTotal = subTotalMenu + subTotalPackage + subTotalAdditional1 + subTotalAdditional2
// Calculating Tax amount (15%)
const tax = grossTotal * 0.15
// Calculating Grand Total for invoice
const grandTotal = grossTotal + tax
// Calculating First payment (60% of Grand Total)
const firstPayment = grandTotal * 0.6
// Calculating Second payment
const secondPayment = grandTotal - firstPayment

// updateHTMLElement("clientName", values.clientName);
// updateHTMLElement("clientEmail", values.clientEmail);

Object.keys(values).forEach(
    key => {
        updateHTMLElement(key, values[key].toString())
    }
)

// Saves tableForm div to use it later
const invoiceDetails = document.getElementById("invoiceDetails")

// Generates table form HTML
const tableForm = `
                    <h3>Services detail:</h3>
                    <table class="tableForm">
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                        <tr>
                            <td>${packageDB[values.eventPackage].name} </td>
                            <td>${values.guestsEventQuantity} </td>
                            <td>${formatCurrency(packageDB[values.eventPackage].pricePerPerson)} </td>
                            <td>${formatCurrency(subTotalPackage)}</td>
                        </tr>
                        <tr>
                            <td>${menuDB[values.eventMenu].name}</td>
                            <td>${values.guestsEventQuantity} </td>
                            <td>${formatCurrency(packageDB[values.eventMenu].pricePerPerson)} </td>
                            <td>${formatCurrency(subTotalMenu)}</td>
                        </tr>
                        <tr>
                            <td>${values.descriptionAdditional1}</td>
                            <td>${values.quantityAdditional1}</td>
                            <td>${formatCurrency(values.rateAdditional1)}</td>
                            <td>${formatCurrency(subTotalAdditional1)}</td>
                        </tr>
                        <tr>
                        <td>${values.descriptionAdditional2}</td>
                        <td>${values.quantityAdditional2}</td>
                        <td>${formatCurrency(values.rateAdditional2)}</td>
                        <td>${formatCurrency(subTotalAdditional2)}</td>
                        </tr>
                    </table>
                    <hr>
                    <table class="tableForm">
                        <tr>
                            <td>Subtotal</td>
                            <td>${formatCurrency(grossTotal)}</td>
                        </tr>
                        <tr>
                            <td>Tax (15%)</td>
                            <td>${formatCurrency(tax)}</td>
                        </tr>
                        <tr>
                            <td>GRAND TOTAL</td>
                            <td>${formatCurrency(grandTotal)}</td>
                        </tr>
                    </table>
                    <h3>Terms and Conditions</h3>

                    <p>
                        First payment (60% of Grand Total): ${formatCurrency(firstPayment)} <br>
                        To be paid 40 days before the event
                    </p>
                    <p>
                        Second payment (40% of Grand Total): ${formatCurrency(secondPayment)} <br>
                        To be paid 7 days before the event
                    </p>
                    <p>
                        Bank account: 345 678 946 0241 <br>
                        IBAN Code: SSWXXCT <br>
                        For any additional enquiries contact us on info@chefpro.com
                    </p>
`
invoiceDetails.innerHTML = tableForm;