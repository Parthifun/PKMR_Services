

// ==========================================
// PACKAGE MODAL
// ==========================================

function openPackage(

    title, price, duration, route, image, includes) {

    document.getElementById("packageTitle").innerText = title;

    document.getElementById("packagePrice").innerText =
        "Starting From " + price;

    document.getElementById("packageDuration").innerText =
        "Duration: " + duration;

    document.getElementById("packageRoute").innerText =
        "Route: " + route;

    document.getElementById("packageImage").src = image;

    let html = "";

    includes.forEach(function (item) {
        html += `<li>${item}</li>`;
    });

    document.getElementById("packageIncludes").innerHTML = html;

    document.getElementById("packageModal").style.display = "flex";

}

function closePackage() {

    document.getElementById("packageModal").style.display = "none";

}

function openTirupatiPackage() {

    document.getElementById("tirupatiModal").style.display = "flex";

}

function closeTirupatiPackage() {

    document.getElementById("tirupatiModal").style.display = "none";

}

// ==========================================
// BOOK SELECTED PACKAGE
// ==========================================

function bookSelectedPackage() {

    resetBooking();

    bookingData.service = "Temple Package";

    bookingData.package =
        document.getElementById("packageTitle").innerText;

    bookingData.packagePrice =
        document.getElementById("packagePrice").innerText;

    bookingData.packageDuration =
        document.getElementById("packageDuration").innerText;

    bookingData.packageRoute =
        document.getElementById("packageRoute").innerText;

    // Detect package route automatically

    if (bookingData.package === "Tirumala Darshan Package") {

        bookingData.pickup = "Tirupati";
        bookingData.destination = "Tirumala";

    }

    else if (bookingData.package === "Tirupati Local Temples") {

        bookingData.pickup = "Tirupati";
        bookingData.destination = "Local Temple Tour";

    }

    else if (bookingData.package === "Sri Kalahasti Package") {

        bookingData.pickup = "Tirupati";
        bookingData.destination = "Sri Kalahasti";

    }

    closePackage();

    openBooking();

}

window.onclick = function (event) {

    const modal = document.getElementById("packageModal");

    if (event.target === modal) {

        closePackage();

    }

};

/* ================================
   HERO IMAGE SLIDER
================================ */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}, 5000);

function openTourDetails(packageName){

    const pkg = packageData[packageName];

    if(!pkg) return;

    document.getElementById("tourTitle").innerHTML = pkg.title;

    document.getElementById("tourDuration").innerHTML = pkg.duration;

    let vehicles = "";

    pkg.vehicles.forEach(vehicle => {

        vehicles += `<li>${vehicle}</li>`;

    });

    document.getElementById("tourVehicles").innerHTML = vehicles;

    let places = "";

    pkg.places.forEach(place => {

        places += `<li>${place}</li>`;

    });

    document.getElementById("tourPlaces").innerHTML = places;

    let includes = "";

    pkg.includes.forEach(item => {

        includes += `<li>${item}</li>`;

    });

    document.getElementById("tourIncludes").innerHTML = includes;

    document.getElementById("tourModal").style.display = "flex";

}

function closeTourModal(){

    document.getElementById("tourModal").style.display = "none";

}

window.addEventListener("click", function(event){

    const modal = document.getElementById("tourModal");

    if(event.target === modal){

        closeTourModal();

    }

});

/* ==========================================
   SORT DESTINATIONS ALPHABETICALLY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tourGrid = document.getElementById("tourGrid");

    if (!tourGrid) return;

    const cards = Array.from(tourGrid.querySelectorAll(".tour-card"));

    cards.sort((a, b) => {

        return a.dataset.name.localeCompare(
            b.dataset.name,
            undefined,
            { sensitivity: "base" }
        );

    });

    cards.forEach(card => {

        tourGrid.appendChild(card);

    });

});