/**
 * JAVASCRIPT FOR WELCOME PAGE
 */

let eventsDB = [];
let sanitizedEventsDB = [];

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
 * Calculates the duration in hh:mm format between to given times
 */
const calculateDuration = (startTime, endTime) => {
  const startHours = Number(startTime.split(":")[0]);
  const startMinutes = Number(startTime.split(":")[1]);
  const endHours = Number(endTime.split(":")[0]);
  const endMinutes = Number(endTime.split(":")[1]);

  let durationHours = endHours - startHours;

  let durationMinutes = 0;

  if (startMinutes !== 0) {
    durationMinutes = 60 - startMinutes + endMinutes;
  } else {
    durationMinutes = endMinutes;
  }

  if (durationMinutes >= 60) {
    durationHours = durationHours + 1;
    durationMinutes = durationMinutes - 60;
  }

  return `${durationHours}:${durationMinutes}`;
};

selectDate.addEventListener("change", (e) => {
  updateEventCards(searchEvents(e.target.value));
});

/**
 * Updates the upcomingEventsCardsContainer with new upcomingEventCards generated from given events data
 */
const updateEventCards = (events) => {
  // Saves upcomingEventsCardsContainer to use it later
  if (!upcomingEventsCardsContainer) return;

  const eventCards = events
    .map((event) => {
      return `
                <div class="upcomingEventCard">
                    <div class="tagContainer">
                        <p class="cardTag tagDate"><i class="fa-regular fa-calendar-days fa-lg" style="color: #000000;"></i><span >${
                          event.eventDate
                        }</span></p>
                        <p class="cardTag tagTime"><i class="fa-solid fa-clock fa-lg" style="color: #000000;"></i><span>${
                          event.startEventTime
                        }</span></p>
                        <p class="cardTag tagLocation"><i class="fa-solid fa-location-dot fa-lg" style="color: #000000;"></i><span>${
                          event.eventLocationShort
                        }</span></p>                          
                        <p class="cardTag tagDuration"><i class="fa-solid fa-hourglass-half fa-lg" style="color: #000000;"></i><span>${calculateDuration(
                          event.startEventTime,
                          event.endEventTime
                        )}h</span></p>
                    </div>
                    <h3>${event.eventTitle}</h3>
                    <p>Date: ${event.eventDate}</p>
                    <p>Location: ${event.startEventTime}</p>
                    <p>Number of guests: ${event.guestsEventQuantity}</p>
                    <p>Client: ${event.clientName}</p>
                    <p>E-mail: ${event.clientEmail}</p>
                    <p>Phone: ${event.clientPhone}</p>
                    <p>Service: Package type ${event.eventPackage} / Menu #${event.eventMenu} </p>
                </div>        
              `;
    })
    .join("");
  updateHTMLElement("upcomingEventsCardsContainer", eventCards);
};

/**
 * Filters the sanitizedEventsDB array by matching events for a given date
 */
const searchEvents = (searchedDate) => sanitizedEventsDB.filter((event) => event.eventDate === searchedDate);

/**
 * Logic for Gallery carousel
 */

// Saves galleryDots to use it later
const galleryDots = document.getElementById("galleryDots");

// Generates gallery carousel slides
const imagesCarousel = galleryDB
  .map((imageDetail) => {
    return `
              <div class="imageCarousel fade">
                  <img src="${imageDetail.image}" alt="${imageDetail.altText}" style="width:100%">
              </div> 
              <div>              
                  <a class="previousImage" onclick="nextImage(-1)"><i class="fa-solid fa-chevron-left fa-xl" style="color: #feb837;"></i></a>
                  <a class="nextImage" onclick="nextImage(1)"><i class="fa-solid fa-chevron-right fa-xl" style="color: #feb837;"></i></a>
              </div>
          `;
  })
  .join("");
updateHTMLElement("carouselContainer", imagesCarousel);

// Generates gallery carousel dots //
const carouselDots = galleryDB
  .map((imageDetail) => {
    return `
              <span class="dotCarousel" onclick="currentImage(${imageDetail.id})"></span>
          `;
  })
  .join("");
updateHTMLElement("galleryDots", carouselDots);

let imageIndex = 1;
showImage(imageIndex);

function nextImage(i) {
  showImage((imageIndex += i));
}

function currentImage(i) {
  showImage((imageIndex = i));
}

// Logic that alows displaying the next image in carousel
function showImage(imageNumber) {
  let i;
  let images = document.getElementsByClassName("imageCarousel");
  let dots = document.getElementsByClassName("dotCarousel");

  if (imageNumber > images.length) {
    imageIndex = 1;
  }

  if (imageNumber < 1) {
    imageIndex = images.length;
  }

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  images[imageIndex - 1].style.display = "block";
  dots[imageIndex - 1].className += " active";
}

/**
 * Logic to fetch the data from the JSON file, update stores, and update the HTML
 */

/**
 * Stores the sanitized events
 */
const storeSanitizedEventsDB = () => {
  sanitizedEventsDB = eventsDB.map((event) => ({
    ...event,
    eventLocationShort: event.eventLocation.split(",")[0],
  }));
};

/**
 * Generates flip cards
 */
const generateFlipCards = () => {
  // Generates flip cards HTML
  const eventFlipCards = eventsDB
    .filter((event) => event.eventDate === "2024-03-16")
    .map((event) => {
      return `
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
              `;
    })
    .join("");
  updateHTMLElement("flipCardsContainer", eventFlipCards);
};

/**
 * Saving the dates in correct format and order for the upcoming section selector in the welcome.html page
 */
const updateSelectDateInput = () => {
  let dateOptions = eventsDB
    .map((event) => {
      return new Date(event.eventDate);
    })
    // Organizes dates chronologically
    .sort((a, b) => a - b)
    // Extracts unique dates for a duplicate-free listing
    .map(
      (date) =>
        // Adds a zero before the month number to match the original format
        `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}-${date.getDate().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`
    );

  // Removes duplicates, adds html and joins into a string to use later
  dateOptions = [...new Set(dateOptions)].map((date) => `<option value="${date}">${date}</option>`).join("");

  updateHTMLElement("selectDate", dateOptions);
};

/**
 * Generate initial event cards
 */
const generateInitialEventCards = () => {
  const initialDate = "2024-02-09";
  updateEventCards(searchEvents(initialDate));
};

const url = "https://raw.githubusercontent.com/deraires/cater_pro/main/resources/events.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    eventsDB = data;
    storeSanitizedEventsDB();
    updateSelectDateInput();
    generateFlipCards();
    generateInitialEventCards();
    return data;
  })
  .catch((error) => console.error("Error al obtener el archivo JSON:", error));
