let basicPage = document.querySelector("#basic");
let socialPage = document.querySelector("#social");
let certificatesPage = document.querySelector("#certificates");
let successPage = document.querySelector("#success");
let navItemBasic = document.querySelector("#nav-item-basic");

socialPage.classList.add("hidden");
certificatesPage.classList.add("hidden");
successPage.classList.add("hidden");
basicPage.classList.remove("hidden");

function goToBasic(element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    socialPage.classList.add("hidden");
    certificatesPage.classList.add("hidden");
    successPage.classList.add("hidden");
    basicPage.classList.remove("hidden");
    navItemBasic.classList.add("nav-item-selected");
    navItemSocial.classList.remove("nav-item-selected");
    navItemCertificates.classList.remove("nav-item-selected");
  });
}

goToBasic(navItemBasic);

function goToSocial(element, validationData) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let ageInputx = document.querySelector("#input-age");
    let errorMessage = document.querySelector("#age-input-error-message");
    let inputAgeLabel = document.querySelector(
      "label[for=" + ageInputx.id + "]"
    );
    let data = validationData();
    if (ageInputx.value === "") {
      inputAgeLabel.classList.add("form-label-wrong");
      errorMessage.textContent = "You need to fill your birthday date!";
      ageInputx.classList.add("form-input-wrong");
    } else {
      errorMessage.textContent = "";
      inputAgeLabel.classList.remove("form-label-wrong");
      ageInputx.classList.remove("form-input-wrong");

      if (data) {
        saveBasicStorage(data);

        basicPage.classList.add("hidden");
        certificatesPage.classList.add("hidden");
        successPage.classList.add("hidden");
        socialPage.classList.remove("hidden");
        navItemBasic.classList.remove("nav-item-selected");
        navItemSocial.classList.add("nav-item-selected");
        navItemCertificates.classList.remove("nav-item-selected");
      }
    }
  });
}

function goToCertificates(element, validationData) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let data = validationData();
    if (data) {
      saveSocialStorage(data);
      basicPage.classList.add("hidden");
      socialPage.classList.add("hidden");
      successPage.classList.add("hidden");
      certificatesPage.classList.remove("hidden");
      navItemBasic.classList.remove("nav-item-selected");
      navItemSocial.classList.remove("nav-item-selected");
      navItemCertificates.classList.add("nav-item-selected");
    }
  });
}

function goToSuccessPage(element, validationData) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let data = validationData();
    if (data) {
      saveCertificatesStorage(data);
      addInfo();
      basicPage.classList.add("hidden");
      socialPage.classList.add("hidden");
      certificatesPage.classList.add("hidden");
      successPage.classList.remove("hidden");
      navItemBasic.classList.remove("nav-item-selected");
      navItemSocial.classList.remove("nav-item-selected");
      navItemCertificates.classList.add("nav-item-selected");
    }
  });
}

function goToCertificatesEasy(element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    basicPage.classList.add("hidden");
    socialPage.classList.add("hidden");
    certificatesPage.classList.remove("hidden");
    navItemBasic.classList.remove("nav-item-selected");
    navItemSocial.classList.remove("nav-item-selected");
    navItemCertificates.classList.add("nav-item-selected");
  });
}
