

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

    includes.forEach(function(item) {
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

window.onclick = function(event) {

    const modal = document.getElementById("packageModal");

    if (event.target === modal) {

        closePackage();

    }

};