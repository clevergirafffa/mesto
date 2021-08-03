const closeButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__editbutton');
const popup = document.querySelector('.popup');
const profileNameField = document.querySelector('.profile__name');
const profileOccupationField = document.querySelector('.profile__occupation');
const popupNameField = document.querySelector('.popup__name');
const popupOccupationField = document.querySelector('.popup__occupation');
const form = document.getElementById('profile-edit');


function copyInitialValuesAndOpenPopup(){
    popupNameField.setAttribute('value', profileNameField.textContent);
    console.log(profileNameField.textContent);
    popupOccupationField.setAttribute('value', profileOccupationField.textContent);
    console.log(profileOccupationField.textContent);
    togglePopup();
}


function togglePopup() {
    popup.classList.toggle('popup_is-opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    let name = document.querySelector('#name');
    let occupation = document.querySelector('#occupation');
    profileNameField.textContent = name.value;
    profileOccupationField.textContent = occupation.value;
    togglePopup();
}

editButton.addEventListener("click", copyInitialValuesAndOpenPopup)
closeButton.addEventListener("click", togglePopup)
form.addEventListener('submit', formSubmitHandler);


