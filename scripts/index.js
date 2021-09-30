const buttonEdit = document.querySelector('.profile__editbutton');
const popupEdit = document.querySelector('#edit');
const cardAdd = document.querySelector('#add');
const buttonAddSave = document.querySelector('.popup__add-save');
const profileNameField = document.querySelector('.profile__name');
const profileOccupationField = document.querySelector('.profile__occupation');
const popupNameField = document.querySelector('.popup__input_type_name');
const popupOccupationField = document.querySelector('.popup__input_type_occupation');
const formEdit = document.getElementById('profile-edit');
const name = document.querySelector('#name');
const occupation = document.querySelector('#occupation');
const placeName = document.querySelector('#place-name');
const placeLink = document.querySelector('#place-link');
const formAdd = document.getElementById('add-card');
const popupArray = Array.from(document.querySelectorAll('.popup'));
//****************//
const closeButtons = Array.from(document.querySelectorAll('.popup__close'));
//****************//
//**************** New code for Sprint 7***********************//
//Большое спасибо за подробные обяъснения! Все было очень детально, логично и понятно) Надеюсь, я все поняла верно)
// Извините, что не сделала "nice-to-have" пункты - не успеваю(
import Card from './Card.js';
import {FormValidator, settings} from './FormValidator.js';

const formValidatorEdit = new FormValidator(settings, document.getElementById('profile-edit'));
formValidatorEdit.enableValidation();

const formValidatorAdd = new FormValidator(settings, document.getElementById('add-card'));
formValidatorAdd.enableValidation();

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', (e) => {
        closePopup(e.target.closest('.popup'));
    })
});

//**************** End of code for Sprint 7***********************//

//**************** New code for Sprint 6***********************//
function addEscListener(event) {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}

function closePopup(openedPopup){
    openedPopup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', addEscListener);
}

popupArray.forEach(addCloseOverlayListeners);

function addCloseOverlayListeners(popup) {
    popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup')) {
            evt.stopImmediatePropagation();
            closePopup(evt.target)
        }
    })
}

//***********End of the new code for Sprint 6*******************//
//**************** New code for Sprint 5***********************//
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const galleryGrid = document.querySelector('.gallery__grid');
const addButon = document.querySelector('.profile__addbutton');

initialCards.forEach((item) => {
    const card = createCard(item);
    const cardElement = card.generate();
    galleryGrid.appendChild(cardElement);
});


addButon.addEventListener('click', (e) => {
    formValidatorAdd.resetValidation();
    openPopup(cardAdd);
})

function addSubmitHandler(evt) {
    evt.preventDefault();
    const cardData = {name: '', link: ''};
    cardData.name = placeName.value;
    cardData.link = placeLink.value;
    galleryGrid.prepend(createCard(cardData).generate());
    closePopup(popupEdit);
    placeName.value = '';
    placeLink.value = '';
    formValidatorAdd.resetValidation();
}

function createCard(item){
    return new Card(item, '.card-template');
}

formAdd.addEventListener('submit', addSubmitHandler);

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', addEscListener);
}

//****************End of the new code for Sprint 5***********************//

function copyInitialValuesAndOpenPopup() {
    popupNameField.setAttribute('value', profileNameField.textContent);
    popupOccupationField.setAttribute('value', profileOccupationField.textContent);
    openPopup(popupEdit);
}

function handleSubmitForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameField.textContent = name.value;
    profileOccupationField.textContent = occupation.value;
    closePopup(popupEdit);
}

buttonAddSave.addEventListener("click", (e) => {
    closePopup(cardAdd);
})

buttonEdit.addEventListener("click", copyInitialValuesAndOpenPopup);
formEdit.addEventListener('submit', handleSubmitForm);

export { openPopup };




