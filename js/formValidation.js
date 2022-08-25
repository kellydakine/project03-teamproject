let regName = /^(\w+ )+\w+$/;
let regEmail = /\S+@\S+\.\S+/;
let regGit = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

let nameInput = document.querySelector("#input-name");
let emailInput = document.querySelector("#input-email");
let ageInput = document.querySelector("#input-age");
let formSelectDay = document.querySelector("#select-day");
let formSelectMonth = document.querySelector("#select-month");
let formSelectYear = document.querySelector("#select-year");
let nicknameInput = document.querySelector("#input-nickname");
let phoneInput = document.querySelector("#input-phone");

let gitInput = document.querySelector("#input-git");
let linkedinInput = document.querySelector("#input-linkedin");

let teamInput = document.querySelector("#input-team");
let institutionInput = document.querySelector("#input-institution");
let graduationInput = document.querySelector("#input-graduation");

// Verificação de Nome
let nameState = false;
let inputNameLabel = document.querySelector("label[for=" + nameInput.id + "]");
nameInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#name-input-error-message");
  if (this.value.length > 0 && regName.test(this.value)) {
    errorMessage.textContent = "";
    inputNameLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    nameState = this.value;
  } else {
    errorMessage.textContent = "You need to fill with your full name!";
    inputNameLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    nameState = false;
  }
});

// Verificação de Email
let emailState = false;
let inputEmailLabel = document.querySelector(
  "label[for=" + emailInput.id + "]"
);
emailInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#email-input-error-message");
  if (this.value.length > 0 && regEmail.test(this.value)) {
    inputEmailLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    errorMessage.textContent = "";
    emailState = this.value;
  } else {
    errorMessage.textContent = "You need to fill with a right email!";
    inputEmailLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    emailState = false;
  }
});

// Verificação de Idade
let ageState = false;
let inputAgeLabel = document.querySelector("label[for=" + ageInput.id + "]");
function resetSelectMessage(){
  let errorMessage = document.querySelector("#age-input-error-message");
  errorMessage.textContent = "";
  inputAgeLabel.classList.remove("form-label-wrong");
  ageInput.classList.remove("form-input-wrong");
}
formSelectDay.addEventListener("click", function () {
  resetSelectMessage()
});
formSelectMonth.addEventListener("click", function () {
  resetSelectMessage()
});
formSelectYear.addEventListener("click", function () {
  resetSelectMessage()
});

// Verificação Github
let gitState = false;
let inputGitLabel = document.querySelector("label[for=" + gitInput.id + "]");
gitInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#git-input-error-message");
  if (this.value.length > 0 && regGit.test(this.value)) {
    errorMessage.textContent = "";
    inputGitLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    gitState = this.value;
  } else {
    errorMessage.textContent = "You need a valid URL!";
    inputGitLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    gitState = false;
  }
});

// Verificação Team name
let teamState = false;
let inputTeamLabel = document.querySelector("label[for=" + teamInput.id + "]");
teamInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#team-input-error-message");
  if (this.value.length > 0) {
    errorMessage.textContent = "";
    inputTeamLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    teamState = this.value;
  } else {
    errorMessage.textContent = "You need to enter a Team name!";
    inputTeamLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    teamState = false;
  }
});

// Verificação Institution
let institutionState = false;
let inputInstitutionLabel = document.querySelector(
  "label[for=" + institutionInput.id + "]"
);
institutionInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#institution-input-error-message");
  if (this.value.length > 0) {
    errorMessage.textContent = "";
    inputInstitutionLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    institutionState = this.value;
  } else {
    errorMessage.textContent = "You need to enter a Institution!";
    inputInstitutionLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    institutionState = false;
  }
});

// Verificação Graduation
let graduationState = false;
let inputGraduationLabel = document.querySelector(
  "label[for=" + graduationInput.id + "]"
);
graduationInput.addEventListener("input", function (event) {
  let errorMessage = document.querySelector("#graduation-input-error-message");
  if (this.value.length > 0) {
    errorMessage.textContent = "";
    inputGraduationLabel.classList.remove("form-label-wrong");
    this.classList.remove("form-input-wrong");
    graduationState = this.value;
  } else {
    errorMessage.textContent = "You need to enter a Graduation!";
    inputGraduationLabel.classList.add("form-label-wrong");
    this.classList.add("form-input-wrong");
    graduationState = false;
  }
});

function basicValidationData() {
  let checkboxInput = document.querySelector("#input-checkbox");
  let validatedCheckbox = checkboxInput.checked;

  let data = false;
  if (validatedCheckbox && nameState && emailState) {
    data = {
      name: nameState,
      nickname: nicknameInput.value,
      email: emailState,
      phone: phoneInput.value,
      age: ageInput.value,
    };
  } else if (!nameState) {
    let errorMessage = document.querySelector("#name-input-error-message");
    inputNameLabel.classList.add("form-label-wrong");
    errorMessage.textContent = "You need to fill with your full name!";
    nameInput.classList.add("form-input-wrong");
  } else if (!emailState) {
    let errorMessage = document.querySelector("#email-input-error-message");
    errorMessage.textContent = "You need to fill with a right email!";
    inputEmailLabel.classList.add("form-label-wrong");
    emailInput.classList.add("form-input-wrong");
  } else {
    alert("You need to accept our terms and privacy!");
  }
  return data;
}

function socialValidationData() {
  let data = false;
  if (gitState) {
    data = {
      git: gitState,
      linkedin: linkedinInput.value,
    };
  } else {
    let errorMessage = document.querySelector("#git-input-error-message");
    errorMessage.textContent = "You need a valid URL!";
    inputGitLabel.classList.add("form-label-wrong");
    gitInput.classList.add("form-input-wrong");
    data = false;
  }
  return data;
}

function certificatesValidationData() {
  let data = false;
  if ((teamState, institutionState, graduationState)) {
    data = {
      certificates: getCertificatesItems(),
      team: teamState,
      institution: institutionState,
      graduation: graduationState,
    };
  } else if (!teamState) {
    let errorMessage = document.querySelector("#team-input-error-message");
    errorMessage.textContent = "You need to enter a Team name!";
    inputTeamLabel.classList.add("form-label-wrong");
    teamInput.classList.add("form-input-wrong");
    data = false;
  } else if (!institutionState) {
    let errorMessage = document.querySelector(
      "#institution-input-error-message"
    );
    errorMessage.textContent = "You need to enter a Institution!";
    institutionTeamLabel.classList.add("form-label-wrong");
    institutionInput.classList.add("form-input-wrong");
    data = false;
  } else if (!graduationState) {
    let errorMessage = document.querySelector(
      "#graduation-input-error-message"
    );
    errorMessage.textContent = "You need to enter a Graduation!";
    graduationTeamLabel.classList.add("form-label-wrong");
    graduationInput.classList.add("form-input-wrong");
    data = false;
  }
  return data;
}
