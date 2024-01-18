/**
 * Title of section
 */

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var x = document.getElementById("navLinksSmallScreen");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  // Saves flipCardContainer to use it later
  const flipCardsContainer = document.getElementById("flipCardsContainer");
  
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
  
  flipCardsContainer.innerHTML = eventFlipCards;
  
  /**
   * Calculates the duration in hh:mm format between to times
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
  
  // Function to organize dates for the upcoming section selector in the welcome.html page
  let dateOptions = eventsDB
    .map((event) => {
      return new Date(event.eventDate);
    })
    // Organizes dates chronologically //
    .sort((a, b) => a - b)
    // Extracts unique dates for a duplicate-free listing //
    .map(
      (date) =>
        // Adds a zero before the month number to standardize the date to the original format //
        `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}-${date.getDate().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`,
    );
  
  // Generates an array of unique dates for later use //
  dateOptions = [...new Set(dateOptions)].map((date) => `<option value="${date}">${date}</option>`).join("");
  
  const selectDate = document.getElementById("selectDate");
  selectDate.innerHTML = dateOptions;
  selectDate.addEventListener("change", (e) => {
    updateEventCards(searchEvents(e.target.value));
  });
  
  const eventLocationArray = eventsDB.map((event) => event.eventLocation);
  
  const sanitizedEventsDB = eventsDB.map((event) => ({
    ...event,
    // eventLocationShort: event.eventLocation.match(/^.+?(?=,)/g)[0]
    eventLocationShort: event.eventLocation.split(",")[0],
  }));
  
  // Generates upcomingEventCards in HTML from eventsDB.js
  const updateEventCards = (events) => {
    // Saves upcomingEventsCardsContainer to use it later
    const upcomingEventsCardsContainer = document.getElementById("upcomingEventsCardsContainer");
    const eventCards = events
      .map((event) => {
        return `
                      <div class="upcomingEventCard">
                          <div class="tagContainer">
                              <p class="cardTag tagDate"><i class="fa-regular fa-calendar-days fa-lg" style="color: #000000;"></i><span >${event.eventDate}</span></p>
                              <p class="cardTag tagTime"><i class="fa-solid fa-clock fa-lg" style="color: #000000;"></i><span>${event.startEventTime}</span></p>
                              <p class="cardTag tagLocation"><i class="fa-solid fa-location-dot fa-lg" style="color: #000000;"></i><span>${event.eventLocationShort}</span></p>                          
                              <p class="cardTag tagDuration"><i class="fa-solid fa-hourglass-half fa-lg" style="color: #000000;"></i><span>${calculateDuration(event.startEventTime, event.endEventTime)}h</span></p>
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
                  `;
      })
      .join("");
    upcomingEventsCardsContainer.innerHTML = eventCards;
  };
  
  const searchEvents = (searchedDate) => sanitizedEventsDB.filter((event) => event.eventDate === searchedDate);
  
  const initialDate = "2024-02-09";
  updateEventCards(searchEvents(initialDate));
  
  // Logic for Gallery carousel//
  // Saves carouselContainer to use it later//
  const carouselContainer = document.getElementById("carouselContainer");
  // Saves galleryDots to use it later
  const galleryDots = document.getElementById("galleryDots");
  
  // Generates gallery carousel slides //
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
  
  carouselContainer.innerHTML = imagesCarousel;
  
  // Generates gallery carousel dots //
  const dotsCarousel = galleryDB
    .map((imageDetail) => {
      return `
              <span class="dotCarousel" onclick="currentImage(${imageDetail.id})"></span>
          `;
    })
    .join("");
  
  galleryDots.innerHTML = dotsCarousel;
  
  let imageIndex = 1;
  showImage(imageIndex);
  
  function nextImage(n) {
    showImage((imageIndex += n));
  }
  
  function currentImage(n) {
    showImage((imageIndex = n));
  }
  
  /**
   * Shows the image o lo que sea
   */
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