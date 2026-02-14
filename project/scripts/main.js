/* ===============================
   main.js
   (Safe utilities for siteplan)
   =============================== */

// Object
// Object
const psychologist = {
  name: "Lic. Daniela Estefany Rondan Suazo",
  specialty: "Anxiety, Emotional Regulation & Relationship Therapy",
  location: "Online & In-person Sessions",
  email: "contact@mindcarepsychology.com"
};

// Array
const services = [
  "Anxiety Therapy",
  "Stress Management",
  "Couples Counseling",
  "Self-Esteem Coaching"
];

// Function 1
function displayServices() {
  const container = document.querySelector("#servicesList");

  services.forEach(service => {
    container.innerHTML += `<li>${service}</li>`;
  });
}

// Function 2 (Form + localStorage + conditional)
function handleForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
  } else {
    localStorage.setItem("clientName", name);
    localStorage.setItem("clientEmail", email);

    document.querySelector("#confirmation").innerHTML =
      `Thank you, ${name}. Your request has been received.`;

    event.target.reset();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", displayServices);

document.querySelector("#contactForm")
  ?.addEventListener("submit", handleForm);
