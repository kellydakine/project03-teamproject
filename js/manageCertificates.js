function createCertificateItem(title, heartClass) {
  let div = document.createElement("div");
  div.classList.add("certificate-item");

  let input = document.createElement("input");
  input.classList.add("form-input-fav-item", "fav-heart", "form-input");
  input.value = title;
  input.disabled = true;

  let heart = document.createElement("a");
  heart.setAttribute("id", "heartIcon");
  let heartIcon = document.createElement("i");
  if(heartClass){
    heartIcon.innerHTML = "<i data-feather='heart' class='iheart-color'></i>";
  } else {
    heartIcon.innerHTML = "<i data-feather='heart'></i>";
  }
  heart.appendChild(heartIcon);
  heart.classList.add("img-fav-item", "heartIcon");
  heart.onclick = onClickHeartItem;

  let edit = document.createElement("a");
  edit.classList.add("img-edit-item");
  edit.setAttribute("id", "editIcon");
  let editIcon = document.createElement("i");
  editIcon.innerHTML = "<i data-feather='edit'></i>";
  edit.appendChild(editIcon);
  edit.onclick = editItem;

  let deleteE = document.createElement("a");
  deleteE.classList.add("img-delete-item");
  deleteE.setAttribute("id", "delete-icon");
  let deleteIcon = document.createElement("i");
  deleteIcon.innerHTML = "<i data-feather='trash'></i>";
  deleteE.appendChild(deleteIcon);
  deleteE.onclick = removeItem;

  div.appendChild(input);
  div.appendChild(heart);
  div.appendChild(edit);
  div.appendChild(deleteE);

  document.getElementById("form-cert-container").appendChild(div);

  feather.replace();

}

function removeItem() {
  let inputvalue = this.parentNode.firstChild.value;
  let objectItem = certificateItems.find(i => i.name === inputvalue)
  let index = certificateItems.indexOf(objectItem);
  certificateItems.splice(index, 1);
  this.parentNode.remove();
  cont--;
}

function editItem() {
  let input = this.parentNode.firstChild;
  let objectItem = certificateItems.find(i => i.name === input.value)
  let index = certificateItems.indexOf(objectItem);
  input.disabled = false;
  input.focus();
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      certificateItems.splice(index, 1, {name: input.value, clicked: objectItem.clicked});
      input.disabled = true;
    }
  });
}

function resetItems() {
  let certificateItem = document.querySelectorAll(".certificate-item");
  if (certificateItem.length > 0) {
    certificateItem.forEach((element) => {
      element.remove();
    });
  }
}

function showCertificates() {
  resetItems();
  certificateItems.map((i) => createCertificateItem(i.name, i.clicked));
}



function putInFirst(arr, from, to) {
  if (arr.length > 0) {
    let item = arr.splice(from, 1);
    arr.splice(to, 0, item[0]);
  }
}

let moreButton = document.querySelector("#certificates-more-button");
let cont = 0;
let certificateItems = [];

moreButton.addEventListener("click", function (event) {
  let inputCertificates = document.querySelector("#form-input-certificates");
  let errorMessage = document.querySelector("#certificates-input-error-message");
  if (inputCertificates.value.length > 0 && cont < 5) {
    errorMessage.textContent= "";
    if (clicked) {
      certificateItems.push({name: inputCertificates.value, clicked:true});
      let index = certificateItems.indexOf(inputCertificates.value);
      putInFirst(certificateItems, index, 0);
      inputCertificates.value = "";
      inputCertificates.focus();
      cont++;
    } else {
      certificateItems.push({name: inputCertificates.value, clicked:false});
      inputCertificates.value = "";
      inputCertificates.focus();
      cont++;
    }
  } else{
    errorMessage.textContent= "You reached the max. number of certificates."
  }
  resetItems();
  showCertificates();
});

let heartElement = document.querySelector("#heartIcon");
let heartIconElement = document.querySelector("#iHeartIcon");
let contClickTop = 1;
let clicked = false;
heartElement.addEventListener("click", function () {
  if (contClickTop % 2 == 0) {
    heartIconElement.classList.remove("iheart-color");
    clicked = false;
  } else {
    heartIconElement.classList.add("iheart-color");
    clicked = true;
    resetItems();
    showCertificates();
  }
  contClickTop++;
});

let heartItemElement = document.querySelector("#heartIcon");
let contClickBottom = 1;
function onClickHeartItem() {
  let input = this.parentNode.firstChild;
  let objectItem = certificateItems.find(i => i.name === input.value)
  if (contClickBottom % 2 == 0) {
    objectItem.clicked = false;
    showCertificates()
    contClickBottom++;
  } else {
    let index = certificateItems.indexOf(objectItem);
    objectItem.clicked = true;
    putInFirst(certificateItems, index, 0);
    resetItems();
    showCertificates();
    contClickBottom++;
  }


}

function getCertificatesItems() {
  let finalItems = [];
  certificateItems.map(i => finalItems.push(i.name));
  return finalItems
}