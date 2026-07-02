// ==========================================
// BOOKING DATA
// ==========================================

const bookingData = {

    service: "",

    package: "",

    packagePrice: "",

    packageDuration: "",

    packageRoute: "",

    travelDate: "",

    pickup: "",

    destination: "",

    pickupTime: "",

    passengers: "",

    vehicle: "",

    customerName: "",

    phone: "",

    email: "",

    vehiclePrice: 0,

    notes: ""

};

function calculateTotal() {

    const basePrice =
        parseInt(
            bookingData.packagePrice.replace(/[^\d]/g, "")
        ) || 0;

    const vehicleAdjustment =
        bookingData.vehiclePrice;

    const total =
        basePrice + vehicleAdjustment;

    document.getElementById("packageBasePrice").innerText =
        "₹" + basePrice;

    if (vehicleAdjustment >= 0) {

        document.getElementById("vehicleAdjustment").innerText =
            "+ ₹" + vehicleAdjustment;

    } else {

        document.getElementById("vehicleAdjustment").innerText =
            "- ₹" + Math.abs(vehicleAdjustment);

    }

    document.getElementById("totalAmount").innerText =
        "₹" + total;

}

// ==========================================
// ELEMENT REFERENCES
// ==========================================

const bookingModal = document.getElementById("bookingModal");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");

const progressSteps = document.querySelectorAll(".progress-step");
const vehicleCards = document.querySelectorAll(".vehicle-card");


// ==========================================
// RESET BOOKING
// ==========================================

function resetBooking() {

    // Reset booking data
    bookingData.travelDate = "";
    bookingData.pickup = "";
    bookingData.destination = "";
    bookingData.pickupTime = "";
    bookingData.passengers = "";
    bookingData.vehicle = "";
    bookingData.customerName = "";
    bookingData.phone = "";
    bookingData.email = "";
    bookingData.notes = "";

    // Reset Step 1 inputs
    document.getElementById("travelDate").value = "";

    // Reset Step 2 inputs
    document.getElementById("pickup").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("pickupTime").value = "";
    document.getElementById("passengers").selectedIndex = 0;

    // Reset Step 4 inputs
    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerNotes").value = "";

    // Remove selected vehicle
    vehicleCards.forEach(card => {
        card.classList.remove("selected");
    });

    // Reset progress bar
    step2.classList.remove("active-step");
    step3.classList.remove("active-step");
    step4.classList.remove("active-step");
    step5.classList.remove("active-step");

    step1.classList.add("active-step");

    progressSteps.forEach(step => {
        step.classList.remove("active");
    });

    progressSteps[0].classList.add("active");

}

// ==========================================
// MODAL FUNCTIONS
// ==========================================

function openBooking(service = "", packageName = "") {

    if (service) {
        bookingData.service = service;
    }

    if (packageName) {
        bookingData.package = packageName;
    }

    document.getElementById("serviceType").value =
        bookingData.service;

    document.getElementById("selectedPackage").value =
        bookingData.package;

    // Show selected package details
    document.getElementById("bookingPackageName").innerText =
        bookingData.package;

    document.getElementById("bookingPackagePrice").innerHTML =
        "💰 <strong>Price:</strong> " + bookingData.packagePrice;

    document.getElementById("bookingPackageDuration").innerHTML =
        "🕒 <strong>Duration:</strong> " + bookingData.packageDuration;

    document.getElementById("bookingPackageRoute").innerHTML =
        "📍 <strong>Route:</strong> " + bookingData.packageRoute;

    document.getElementById("pickup").value =
        bookingData.pickup;

    document.getElementById("destination").value =
        bookingData.destination;

    calculateTotal();

    bookingModal.style.display = "flex";

}



function closeBooking() {

    bookingModal.style.display = "none";

}

document.querySelector(".close-booking").onclick = closeBooking;

window.onclick = function (e) {

    if (e.target === bookingModal) {

        closeBooking();

    }

}

/* NEXT */

document.getElementById("nextStep").onclick = function () {

    const travelDate = document.getElementById("travelDate").value;
    bookingData.travelDate = travelDate;

    if (travelDate === "") {

        alert("Please select your travel date.");

        return;

    }

    step1.classList.remove("active-step");

    step2.classList.add("active-step");

    progressSteps[0].classList.remove("active");
    progressSteps[1].classList.add("active");

}

/* BACK */

document.getElementById("backStep1").onclick = function () {

    step2.classList.remove("active-step");

    step1.classList.add("active-step");

    progressSteps[1].classList.remove("active");
    progressSteps[0].classList.add("active");

}

// ==========================================
// STEP 2 → STEP 3
// ==========================================

document.getElementById("nextStep2").onclick = function () {

    bookingData.pickup = document.getElementById("pickup").value;

    bookingData.destination = document.getElementById("destination").value;

    bookingData.pickupTime = document.getElementById("pickupTime").value;

    bookingData.passengers = document.getElementById("passengers").value;

    if (
        bookingData.pickup === "" ||
        bookingData.destination === "" ||
        bookingData.pickupTime === ""
    ) {

        alert("Please complete all journey details.");

        return;

    }

    step2.classList.remove("active-step");

    step3.classList.add("active-step");

    progressSteps[1].classList.remove("active");

    progressSteps[2].classList.add("active");

};

// ==========================================
// STEP 3 - VEHICLE SELECTION
// ==========================================

vehicleCards.forEach(card => {

    card.addEventListener("click", function () {

        // Remove previous selection
        vehicleCards.forEach(c => {
            c.classList.remove("selected");
        });

        // Highlight selected card
        this.classList.add("selected");

        // Save vehicle
        bookingData.vehicle = this.dataset.vehicle;

        bookingData.vehiclePrice =
            Number(this.dataset.price);

        calculateTotal();

        console.log(bookingData);

    });

});

// ==========================================
// STEP 3 BACK BUTTON
// ==========================================

document.getElementById("backStep2").onclick = function () {

    step3.classList.remove("active-step");

    step2.classList.add("active-step");

    progressSteps[2].classList.remove("active");
    progressSteps[1].classList.add("active");

};

// ==========================================
// STEP 3 NEXT BUTTON
// ==========================================

document.getElementById("nextStep3").onclick = function () {

    if (bookingData.vehicle === "") {

        alert("Please select a vehicle.");

        return;

    }

    step3.classList.remove("active-step");

    step4.classList.add("active-step");

    progressSteps[2].classList.remove("active");

    progressSteps[3].classList.add("active");

};

// ==========================================
// STEP 4 BACK BUTTON
// ==========================================

document.getElementById("backStep3").onclick = function () {

    step4.classList.remove("active-step");

    step3.classList.add("active-step");

    progressSteps[3].classList.remove("active");

    progressSteps[2].classList.add("active");

};

// ==========================================
// STEP 4 NEXT BUTTON
// ==========================================

document.getElementById("nextStep4").onclick = function () {

    bookingData.customerName =
        document.getElementById("customerName").value;

    bookingData.phone =
        document.getElementById("customerPhone").value;

    bookingData.email =
        document.getElementById("customerEmail").value;

    bookingData.notes =
        document.getElementById("customerNotes").value;

    if (
        bookingData.customerName === "" ||
        bookingData.phone === ""
    ) {

        alert("Please enter your name and phone number.");

        return;

    }

    // Populate Summary

    document.getElementById("summaryService").innerText =
        bookingData.service || "Cab Booking";

    document.getElementById("summaryPackage").innerText =
        bookingData.package || "Not Applicable";

    const packagePrice =
        parseInt(bookingData.packagePrice.replace(/[^\d]/g, "")) || 0;

    const total =
        packagePrice + bookingData.vehiclePrice;

    document.getElementById("summaryPackagePrice").innerText =
        "₹" + packagePrice;

    if (bookingData.vehiclePrice >= 0) {

        document.getElementById("summaryVehiclePrice").innerText =
            "+ ₹" + bookingData.vehiclePrice;

    } else {

        document.getElementById("summaryVehiclePrice").innerText =
            "- ₹" + Math.abs(bookingData.vehiclePrice);

    }

    document.getElementById("summaryTotal").innerText =
        "₹" + total;

    document.getElementById("summaryDate").innerText =
        bookingData.travelDate;

    document.getElementById("summaryPickup").innerText =
        bookingData.pickup;

    document.getElementById("summaryDestination").innerText =
        bookingData.destination;

    document.getElementById("summaryTime").innerText =
        bookingData.pickupTime;

    document.getElementById("summaryPassengers").innerText =
        bookingData.passengers;

    document.getElementById("summaryVehicle").innerText =
        bookingData.vehicle;

    document.getElementById("summaryName").innerText =
        bookingData.customerName;

    document.getElementById("summaryPhone").innerText =
        bookingData.phone;

    document.getElementById("summaryEmail").innerText =
        bookingData.email || "Not Provided";

    document.getElementById("summaryNotes").innerText =
        bookingData.notes || "None";

    step4.classList.remove("active-step");

    step5.classList.add("active-step");

    progressSteps[3].classList.remove("active");

    progressSteps[4].classList.add("active");

};

document.getElementById("backStep4").onclick = function () {

    step5.classList.remove("active-step");

    step4.classList.add("active-step");

    progressSteps[4].classList.remove("active");

    progressSteps[3].classList.add("active");

};

document.getElementById("confirmBooking").onclick = function () {

    console.log(bookingData);

    alert("Booking Confirmed!");

};