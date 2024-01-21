/**
 * JAVASCRIPT FOR QUOTATION PAGE
 */

/**
 * Toggles the display of the navigation menu links when the user clicks on the hamburger menu bar icon
 */
function toggleMenu() {
  const navLinksSmallScreen = document.getElementById("navLinksSmallScreen");
  if (!navLinksSmallScreen) return;

  if (navLinksSmallScreen.style.display === "block") {
    navLinksSmallScreen.style.display = "none";
  } else {
    navLinksSmallScreen.style.display = "block";
  }
}

addEventListener("scroll", () => {
  const navLinksSmallScreen = document.getElementById("navLinksSmallScreen");
  if (!navLinksSmallScreen) return;

  if (navLinksSmallScreen.style.display === "block") {
    navLinksSmallScreen.style.display = "none";
  }
});

/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, newInnerHTML) {
  if (document.getElementById(elementId)) {
    document.getElementById(elementId).innerHTML = newInnerHTML;
  }
}

/**
 * Sets a default number value to control possible failure errors
 */
function getNumberValueWithDefault(value, defaultNumberValue) {
  if (value) return Number(value);
  return defaultNumberValue;
}

/**
 * Formats to the corresponding amounts in euro currency
 */
function formatCurrency(ammount) {
  return ammount.toLocaleString("en-DE", {
    style: "currency",
    currency: "EUR",
  });
}

// Gets key values from URL
const values = Object.fromEntries(new URLSearchParams(window.location.search));

// Calculating data for the Service detail chart in quotation preview (quotation.html) page
const persons = getNumberValueWithDefault(values.guestsEventQuantity, 1);

// Calculating subtotal for Package selection
const pricePerPersonPackage = packageDB[values.eventPackage].pricePerPerson;
const subTotalPackage = persons * pricePerPersonPackage;

// Calculating subtotal for Menu selection
const pricePerPersonMenu = menuDB[values.eventMenu].pricePerPerson;
const subTotalMenu = persons * pricePerPersonMenu;

// Calculating subtotal for Additional items
const quantityAdditional1 = getNumberValueWithDefault(values.quantityAdditional1, 0);
const subTotalAdditional1 = values.rateAdditional1 * quantityAdditional1;
const quantityAdditional2 = getNumberValueWithDefault(values.quantityAdditional2, 0);
const subTotalAdditional2 = values.rateAdditional2 * quantityAdditional2;

// Calculating grossTotal for all items in invoice
const grossTotal = subTotalMenu + subTotalPackage + subTotalAdditional1 + subTotalAdditional2;

// Calculating Tax amount (15%)
const tax = grossTotal * 0.15;

// Calculating Grand Total for invoice
const grandTotal = grossTotal + tax;

// Calculating First payment (60% of Grand Total)
const firstPayment = grandTotal * 0.6;

// Calculating Second payment
const secondPayment = grandTotal - firstPayment;

Object.keys(values).forEach((key) => {
  updateHTMLElement(key, values[key].toString());
});

// Saves tableForm div to use it later
const invoiceDetails = document.getElementById("invoiceDetails");

// Generates tableForm HTML
const tableForm = `
                    <h2>Services detail:</h2>
                    <div class="placeholder"></div>
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
`;
invoiceDetails.innerHTML = tableForm;
