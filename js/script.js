/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("navLinksSmallScreen");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/**
 * Initial Values for the templates.html page
 */
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
      <option value="menu1">Menu #1</option>
      <option value="menu1">Menu #2</option>
      <option value="menu1">Menu #3</option>
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

/**
 * Updates the innerHTML of the specified element
 */
function updateHTMLElement(elementId, innerHTML) {
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


/**__________________________
 * Updates the innerHTML of the specified element
 */

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

// updateHTMLElement("contractSignatureDate", values.contractSignatureDate) 