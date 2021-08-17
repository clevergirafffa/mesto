const closeButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__editbutton');
const popup = document.querySelector('#edit');
const addCard = document.querySelector('#add');
const addCloseButton = document.querySelector('.add__close');
const addSaveButton = document.querySelector('.add__save');
const profileNameField = document.querySelector('.profile__name');
const profileOccupationField = document.querySelector('.profile__occupation');
const popupNameField = document.querySelector('.popup__input_type_name');
const popupOccupationField = document.querySelector('.popup__input_type_occupation');
const form = document.getElementById('profile-edit');
let name = document.querySelector('#name');
let occupation = document.querySelector('#occupation');
let placeName = document.querySelector('#place-name');
let placeLink = document.querySelector('#place-link');
const addForm = document.getElementById('add-card');

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

const cardTemplate = document.getElementById('card-template');
const galleryGrid = document.querySelector('.gallery__grid');
const addButon = document.querySelector('.profile__addbutton');

function initCards(item, index, arr){
    const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
    newCard.querySelector('.gallery__title').innerText = item.name;
    newCard.querySelector('.gallery__image').setAttribute('src', item.link);
    newCard.querySelector('.gallery__popup').setAttribute('src', item.link);
    newCard.querySelector('.popup__place-title').innerText = item.name;
    addListeners(newCard);
    galleryGrid.appendChild(newCard);
}

initialCards.forEach(initCards);

addButon.addEventListener('click', (e) =>{
  addCard.classList.toggle('popup_is-opened');
})

addCloseButton.addEventListener('click', (e) =>{
    addCard.classList.toggle('popup_is-opened');
})

function addSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
    newCard.querySelector('.gallery__title').innerText = placeName.value;
    newCard.querySelector('.gallery__image').setAttribute('src', placeLink.value);
    newCard.querySelector('.popup__place-title').innerText = placeName.value;
    addListeners(newCard);
    galleryGrid.prepend(newCard);
    toggleAddForm();
}

function addListeners(newCard){
    newCard.querySelector('.gallery__deletebutton').addEventListener('click', (e) => {
        e.target.closest('.gallery__item').remove();
    })
    newCard.querySelector('.gallery__likebutton').addEventListener('click', (e) => {
        e.target.classList.toggle('gallery__likebutton_is-active');
    })
    newCard.querySelector('.gallery__image').addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('popup_is-opened');
    })
    newCard.querySelector('.gallery__close').addEventListener('click', (e) => {
        e.target.closest('.popup').classList.toggle('popup_is-opened');
    })
}

addForm.addEventListener('submit', addSubmitHandler);

//****************End of the new code for Sprint 5***********************//

function copyInitialValuesAndOpenPopup(){
    popupNameField.setAttribute('value', profileNameField.textContent);
    popupOccupationField.setAttribute('value', profileOccupationField.textContent);
    togglePopup();
}

function togglePopup() {
    popup.classList.toggle('popup_is-opened');
}

function toggleAddForm() {
    addCard.classList.toggle('popup_is-opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameField.textContent = name.value;
    profileOccupationField.textContent = occupation.value;
    togglePopup();
}

editButton.addEventListener("click", copyInitialValuesAndOpenPopup)
closeButton.addEventListener("click", togglePopup)
form.addEventListener('submit', formSubmitHandler);


