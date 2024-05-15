const signInForm = document.getElementById("signInForm");
const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");
const registerFormContainer = document.getElementById(
  "registerFormContainer"
);
const registerForm = document.getElementById("registerForm");

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "index.html";
});

registerLink.addEventListener("click", function (event) {
  event.preventDefault();

  document
    .querySelector(".bg-white.p-8.rounded-lg.shadow-md.w-full.md\\:w-96")
    .classList.add("hidden");
  registerFormContainer.classList.remove("hidden");
});

loginLink.addEventListener("click", function (event) {
  event.preventDefault();

  document
    .querySelector(".bg-white.p-8.rounded-lg.shadow-md.w-full.md\\:w-96")
    .classList.remove("hidden");
  registerFormContainer.classList.add("hidden");
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "login.html";
});