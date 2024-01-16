//Saves flipCardContainer to use it later
const flipCardsContainer = document.getElementById("flipCardsContainer");

//Generates flip cards HTML
const eventFlipCards = eventsDB
    .filter(
        (event) => event.eventDate === "2024-03-16",
    )
    .map(event => {
        return (
            `
                <div class="flipCard">
                <div class="flipCardContent">
                    <div class="flipCardFront">
                        <h3>${event.eventTitle}</h3>
                    </div>
                    <div class="flipCardBack">
                        <h4>${event.eventTitle}</h4>
                        <p>Start time: ${event.startEventTime}</p>
                        <p>Location: ${event.eventLocation}</p>
                        <p>No. of guests: ${event.guestsEventQuantity} people</p>
                    </div>
                </div>
                </div>
                `)
    }).join("")

flipCardsContainer.innerHTML = eventFlipCards


/**
 * Calculates the duration in hh:mm format between to times
 * @param {string} startTime - start time in hh:mm format
 * @param {string} endTime - start time in hh:mm format
 * @returns 
 */
const calculateDuration = (startTime, endTime) => {
    const startHours = Number(startTime.split(":")[0]);
    const startMinutes = Number(startTime.split(":")[1]);
    const endHours = Number(endTime.split(":")[0]);
    const endMinutes = Number(endTime.split(":")[1]);

    let durationHours = endHours - startHours

    let durationMinutes = 0;

    if (startMinutes !== 0) {
        durationMinutes = 60 - startMinutes + endMinutes
    } else {
        durationMinutes = endMinutes
    }

    if (durationMinutes >= 60) {
        durationHours = durationHours + 1;
        durationMinutes = durationMinutes - 60;
    }

    return `${durationHours}:${durationMinutes}`
}

const searchedDate = "2024-03-16";

const searchedEvents = eventsDB.filter(
  (event) => event.eventDate === searchedDate,
);

let dateOptions = eventsDB
  .map((event) => {
    return new Date(event.eventDate);
  })
  // Ordena las fechas//
  .sort((a, b) => a - b)
  // Extrae las fechas únicas para tener un listado sin duplicados/
  .map(
    (date) =>
    // agrega un cero antes del número de mes para estandarizar la fecha al formato original//
      `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}-${date.getDate().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`, // agrega un cero antes del número de día para estandarizar la fecha al formato original//
  );

  // Genera un array de fechas unicas para utilizar más adelante//
dateOptions = [...new Set(dateOptions)];

console.log(dateOptions);

const eventLocationArray = eventsDB.map(
   (event) => event.eventLocation 

)
console.log(eventLocationArray);

let shortEventLocation = eventLocationArray.split(",",1);

console.log(shortEventLocation);




/**
 * 
 */
// Saves upcommingEventsCardsContainer to use it later
const upcommingEventsCardsContainer = document.getElementById("upcommingEventsCardsContainer");

// Generates upcommingEventCards in HTML from eventsDB.js
const eventCards = eventsDB
.map (event => {
    return (
        `<div class="upcommingEventCard">
        <div class="tagContainer">
            <p class="cardTag tagDate"><i class="fa-regular fa-calendar-days fa-lg" style="color: #000000;"></i><span >${event.eventDate}</span></p>
            <p class="cardTag tagLocation"><i class="fa-solid fa-location-dot fa-lg" style="color: #000000;"></i><span>${event.eventLocation}</span></p>                            
            <p class="cardTag tagTime"><i class="fa-solid fa-clock fa-lg" style="color: #000000;"></i><span>${event.startEventTime}</span></p>
            <p class="cardTag tagDuration"><i class="fa-solid fa-hourglass-half fa-lg" style="color: #000000;"></i><span>${calculateDuration(event.startEventTime,event.endEventTime)}h</span></p>
        </div>
        <h3>${event.eventTitle}</h3>
        <p>Date: ${event.eventDate}</p>
        <p>Location: ${event.startEventTime}</p>
        <p>Number of guests: ${event.guestsEventQuantity}</p>
        <p>Client: ${event.clientName}</p>
        <p>E-mail: ${event.clientEmail}</p>
        <p>Phone: ${event.clientPhone}</p>
        <p>Service: Package type ${event.selectEventPackage} / Menu #${event.selectEventMenu} </p>
    </div>        
        `)
}).join("")   

console.log(eventCards)

upcommingEventsCardsContainer.innerHTML = eventCards