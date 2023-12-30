/**
 * Initial Values for the templates page
 */

const contractFormInnerHTML = `
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
  <input type="submit" value="Generar Contrato">
`

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
    // grab the container of the form and replace the innerHTML (osea the form)
    // with the new form
    updateHTMLElement("inputInformationForm", contractFormInnerHTML)
    updateFormAction("inputInformationForm", "contract.html")
    // Also, grab the container of templatePreview and idem
  }
}

document.getElementById("selectTemplate").addEventListener(
  "change",
  changeSelectedTemplate
)