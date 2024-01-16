/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var x = document.getElementById("navLinksSmallScreen");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, innerHTML) {
    console.log(elementId)
    document.getElementById(elementId).innerHTML = innerHTML
}

/**
 * Updates the action of the specified form element
 */
function updateFormAction(elementId, action) {
    document.getElementById(elementId).action = action
}

function changeSelectedTemplate(event) {
    const selectedTemplate = event.target.value;
    if (selectedTemplate === "Contract") {
        console.log("contract selected do stuff");
        // grab the container of the form and replace the innerHTML inputInformationForm with the form selected
        updateHTMLElement("inputInformationForm", contractFormInnerHTML)
        updateHTMLElement("templatePreview", contractTemplateInnerHTML)
        updateFormAction("inputInformationForm", "contract.html")
    } else
        if (selectedTemplate === "Invoice") {
            console.log("invoice selected");
            updateHTMLElement("inputInformationForm", invoiceFormInnerHTML)
            updateHTMLElement("templatePreview", invoiceTemplateInnerHTML)
            updateFormAction("inputInformationForm", "invoice.html")
        }
}

if (document.getElementById("selectTemplate")) document.getElementById("selectTemplate").addEventListener(
    "change",
    changeSelectedTemplate
)


/** Saves the information from input variables detailed in the URL*/
const values = Object.fromEntries(new URLSearchParams(window.location.search))


/* Initial Values for the templates.html page
/*HTML for inputInformationForm section, in particular for "Invoice" option*/
const invoiceFormInnerHTML = `
                    <label for="invoiceDate">Date</label>
                    <input type="date" name="invoiceDate" id="invoiceDate" placeholder="MM/DD/YYYY">
                    <label for="clientName">Client name</label>
                    <input type="text" name="clientName" id="clientName" placeholder="Sussan Johnson">
                    <label for="clientEmail">Client e-mail</label>
                    <input type="email" name="clientEmail" id="clientEmail" placeholder="email@example.com">
                    <label for="clientPhone">Client Phone</label>
                    <input type="tel" name="clientPhone" id="clientPhone" placeholder="623 45 67 98">
                    <label for="eventTitle">Event title</label>
                    <input type="text" name="eventTitle" id="eventTitle" placeholder="Birthday party for Mr. Johnson">
                    <label for="eventDate">Event date</label>
                    <input type="date" name="eventDate" id="eventDate" placeholder="MM/DD/YYYY">
                    <table class="tableForm">
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                            </tr>
                            <tr>
                                <td><label for="selectEventPackage">Select event package</label>
                                    <select name="selectEventPackage" id="selectEventPackage">
                                        <option value="Platinum package">Platinum package</option>
                                        <option value="Diamond package">Diamond package</option>
                                        <option value="Gold package">Gold package</option>                                                                            
                                    </select>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><label for="selectEventMenu">Select event menu</label>
                                    <select name="selectEventMenu" id="selectEventMenu">
                                        <option value="Menu 1">Menu #1</option>
                                        <option value="Menu 2">Menu #2</option>
                                        <option value="Menu 3">Menu #3</option>
                                    </select>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><label for="descriptionAdditional1">Additional 1</label>
                                    <input type="text" name="descriptionAdditional1" id="descriptionAdditional1"
                                        placeholder="Parking spaces">
                                </td>
                                <td><label for="quantityAdditional1">Input quantity</label>
                                    <input type="number" name="quantityAdditional1" id="quantityAdditional1"
                                        placeholder="100">
                                </td>
                                <td><label for="rateAdditional1">Input rate</label>
                                    <input type="text" name="rateAdditional1" id="rateAdditional1" placeholder="10">
                                </td>
                            </tr>
                            <tr>
                                <td><label for="descriptionAdditional1">Additional 2</label>
                                    <input type="text" name="descriptionAdditional1" id="descriptionAdditional1"
                                        placeholder="Extra hours">
                                </td>
                                <td><label for="quantityAdditional2">Input quantity</label>
                                    <input type="number" name="quantityAdditional2" id="quantityAdditional2"
                                        placeholder="2">
                                </td>
                                <td><label for="rateAdditional2">Input rate</label>
                                    <input type="text" name="rateAdditional2" id="rateAdditional2" placeholder="150">
                                </td>
                            </tr>
                        </table>
                    <input class="buttonSubmit" type="submit" value="Generate Invoice">
`
/*HTML for templatePreview section, in particular for "Invoice" option*/
const invoiceTemplateInnerHTML = `
                <img class="center" src="./resources/logos/logoFullWhite.png" alt="logoFullWhite">
                <h2 class="center">INVOICE</h2>
                <p class="right">Invoice Number 98675 <br>
                    Date: [Today´s date]
                </p>
                <strong class="smallText">Chef Pro Catering Services</strong>
                <p class="smallText">Charm Street, #567, Valencia, Spain <br>
                    Phone: 888 00 00 00 <br>
                    E-mail: info@chefpro.com
                </p>

                <strong class="smallText">Client information</strong>
                <p class="smallText">
                    Client name: [Client Name] <br>
                    Client E-mail: [E-mail] <br>
                    Client Phone: [Phone] <br>
                    Event title: [Event title] <br>
                    Event date: [Event date] <br>
                </p>

                <h3>Services detail:</h3>
                <table class="tableForm">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Package selected</td>
                        <td></td>
                        <td>€  </td>
                        <td>€  </td>
                    </tr>
                    <tr>
                        <td>Menu selected</td>
                        <td></td>
                        <td>€  </td>
                        <td>€  </td>
                    </tr>
                    <tr>
                        <td>Additional 1</td>
                        <td></td>
                        <td>€  </td>
                        <td>€  </td>
                    </tr>
                    <tr>
                        <td>Additional 2</td>
                        <td> </td>
                        <td>€  </td>
                        <td>€  </td>
                    </tr>
                </table>
                <hr>
                <table class="tableForm">
                    <tr>
                        <td>Subtotal</td>
                        <td>€  </td>
                    </tr>
                    <tr>
                        <td>Tax (15%)</td>
                        <td>€  </td>
                    </tr>
                    <tr>
                        <td>GRAND TOTAL</td>
                        <td>€ </td>
                    </tr>
                </table>
                <h3>Terms and Conditions</h3>

                <p>
                    First payment (60% of Grand Total): €  <br>
                    To be paid 40 days before the event
                </p>
                <p>
                    Second payment (40% of Grand Total): €  <br>
                    To be paid 7 days before the event
                </p>
                <p>
                    Bank account: 345 678 946 0241 <br>
                    IBAN Code: SSWXXCT <br>
                    For any additional enquiries contact us on info@chefpro.com
                </p>
`

/*HTML for inputInformationForm section, in particular for "Contract" option*/
const contractFormInnerHTML = `
 <label for="clientName">Client name</label>
 <input type="text" name="clientName" id="clientName" placeholder="Sussan Johnson">
 <label for="clientEmail">Client e-mail</label>
 <input type="email" name="clientEmail" id="clientEmail" placeholder="email@example.com">
 <label for="clientPhone">Client Phone</label>
 <input type="tel" name="clientPhone" id="clientPhone" placeholder="623 45 67 98">
 <label for="eventTitle">Event title</label>
 <input type="text" name="eventTitle" id="eventTitle" placeholder="Birthday party for Mr. Johnson">
 <label for="eventDate">Event location</label>
 <input type="text" name="eventLocation" id="eventLocation" placeholder="Number, Street, City, Zip code">
 <label for="eventDate">Event date</label>
 <input type="date" name="eventDate" id="eventDate" placeholder="MM/DD/YYYY">
 <label for="startEventTime">Start Time for the event</label>
 <input type="time" name="startEventTime" id="startEventTime" placeholder="19:30">
 <label for="endEventTime">End Time for the event</label>
 <input type="time" name="endEventTime" id="endEventTime" placeholder="12:30">
 <label for="selectEventMenu">Select event menu</label>
 <select name="selectEventMenu" id="selectEventMenu">
     <option value="Menu #1">Menu #1</option>
     <option value="Menu #2">Menu #2</option>
     <option value="Menu #3">Menu #3</option>
 </select>
 <label for="guestsEventQuantity">Number of guests</label>
 <input type="number" name="guestsEventQuantity" id="guestsEventQuantity" placeholder="120">
 <label for="contractSignatureDate">Contract signature date</label>
 <input type="date" name="contractSignatureDate" id="contractSignatureDate" placeholder="MM/DD/YYYY">
 <label for="eventCost">Total cost of the event</label>
 <input type="number" name="eventCost" id="eventCost" placeholder="4500">
 <label for="uploadFile">Attach document</label>
 <input type="file" name="uploadFile" id="uploadFile">
 <input class="buttonSubmit" type="submit" value="Generate Contract">
`
/*HTML for templatePreview section, in particular for "Contract" option*/
const contractTemplateInnerHTML = `
<img class="center" src="./resources/logos/logoFullWhite.png" alt="logoFullWhite">
<h2 class="center">CONTRACT</h2>
<p>This Catering Service Agreement is made on [Date], between Chef Pro, located at Charm Street,
   #567, Valencia, Spain ("Provider"), and [Client Name], contact information [E-mail] and
   [Phone]("Client").
</p>
<h3>Services:</h3>
<p>Scope of Services: Provider agrees to render catering services for the event detailed below,
   including but not limited to food preparation, service, and cleanup.
</p>

<p>Event Details: The catering services will be provided for the event titled [Event Name] scheduled
   to take place at [Event Location] on [Event Date] from [Start Time] to [End Time].
</p>

<p>Menu Selection: [Menu number selected]<br>
   Number of guests: [Number] <br>
</p>
<h3>Payment</h3>
<p>Fees and Payment Schedule: Client agrees to pay Provider the total agreed-upon fee of [Total
   Amount] for the catering services. Payment shall be made in the following installments: <br>
   [Advance/Deposit Amount]: Due upon signing this Agreement.<br>
   [Remaining Amount]: Due no later than [Due Date].<br>
   Additional Costs: Any additional services or items requested by the Client outside the agreed
   scope will incur extra charges as mutually agreed upon by both parties.
</p>
<h3>Terms and Conditions</h3>
<p>Cancellation Policy: In the event of cancellation by the Client, the following terms apply: <br>
   Cancellation 30 days before the event: 50% refund of the total fee.<br>
   Cancellation within 15 days of the event: No refund provided.<br>
   Liability: Provider shall not be liable for any allergic reactions, health issues, or damages
   resulting from consumption or handling of the food provided.
</p>
<h3>Signatures</h3>
<p>IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above
   written.
</p>
<p>
   Chef Pro: __________________ [Date] <br>
   <span class="tab">Mr. Matthew Miller, CEO</span>
</p>
<p>
   Client:__________________ [Date] <br>
   <span class="tab">[Client Name]</span>
</p>
`

