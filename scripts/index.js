const closeButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__editbutton');
const popup = document.querySelector('.popup');
const profileNameField = document.querySelector('.profile__namedata');
const profileOccupationField = document.querySelector('.profile__occupation');
const popupNameField = document.querySelector('.popup__name');
const popupOccupationField = document.querySelector('.popup__occupation');
const form = document.getElementById('profile-edit');

popupNameField.setAttribute('value', profileNameField.textContent)
popupOccupationField.setAttribute('value', profileOccupationField.textContent)

function togglePopup() {
    popup.classList.toggle('popup_is-opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameField.textContent = form.elements[0].value;
    profileOccupationField.textContent = form.elements[1].value;
    togglePopup();
}

editButton.addEventListener("click", togglePopup)
closeButton.addEventListener("click", togglePopup)
form.addEventListener('submit', formSubmitHandler);


