const inputField = document.querySelector("#text-input");
const outputDisplay = document.querySelector("#output");
const form = document.querySelector("#form");

// Creating the Person class
class Profile {
  constructor(name, city, feedBack, complaint, message) {
    this.name = name;
    this.city = city;
    this.feedBack = feedBack;
    this.complaint = complaint;
    this.message = message;
  }
}

// Creating the user profile
const profile = new Profile(
  "",
  "",
  "",
  "",
  "Okay, noted! Thank you for always choosing us."
);

// Setting the defaut display of the output element
outputDisplay.innerHTML = "Hi! What is your name?";

// Generating the reply to the question on feedback
// based on whether the user's reply contains certain words
const feedBackReply = () => {
  inputField.value = "";
  if (
    profile.feedBack.toLowerCase().includes("yeah") ||
    profile.feedBack.toLowerCase().includes("yes") ||
    profile.feedBack.toLowerCase().includes("yea") ||
    profile.feedBack.toLowerCase().includes("yup")
  ) {
    form.style.display = "none";
    outputDisplay.innerHTML =
      "<div><i class='far fa-smile'></i> <p>That's so awesome! Thanks and have a nice day.</p> </div>";
  } else {
    outputDisplay.innerHTML =
      "<div><i class='far fa-frown'></i> <p>Sorry to hear that. What can we do to ensure better services next time?</p> </div>";
  }
};

// Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (profile.name == "") {
    profile.name = inputField.value;
    setTimeout(() => {
      outputDisplay.innerHTML = `Hello ${profile.name}. Where are you from?`;
    }, 2000);
    inputField.value = "";
  } else if (profile.city == "") {
    profile.city = inputField.value;
    setTimeout(() => {
      outputDisplay.innerHTML = `I hear ${profile.city} is a very beautiful place.`;
    }, 2000);
    setTimeout(() => {
      outputDisplay.innerHTML =
        "We'd love your feedback. Are you satisfied with our services?";
    }, 5000);
    inputField.value = "";
  } else if (profile.feedBack == "") {
    profile.feedBack = inputField.value;
    setTimeout(() => {
      feedBackReply();
    }, 2000);
  } else if (profile.complaint == "") {
    profile.complaint = inputField.value;
    setTimeout(() => {
      form.style.display = "none";
      outputDisplay.innerHTML = `<div>
      <i class="far fa-thumbs-up"></i>
      <p>${profile.message}</p>
      </div>`;
    }, 2000);
  }
});
