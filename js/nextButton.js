let basicNextButton = document.querySelector("#basic-next-button");
let socialNextButton = document.querySelector("#social-next-button");
let certificatesFinishButton = document.querySelector("#certificates-finish-button");
let navItemSocial = document.querySelector("#nav-item-social");
let navItemCertificates = document.querySelector("#nav-item-certificates");


goToSocial(basicNextButton, basicValidationData);
goToSocial(navItemSocial, basicValidationData);

// goToCertificatesEasy(navItemCertificates)
goToCertificates(navItemCertificates, socialValidationData);
goToCertificates(socialNextButton, socialValidationData);

goToSuccessPage(certificatesFinishButton, certificatesValidationData);
