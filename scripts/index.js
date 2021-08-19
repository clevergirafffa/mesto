const closeButton = document.querySelector('.edit__close');
const editButton = document.querySelector('.profile__editbutton');
const popupEdit = document.querySelector('#edit');
const addCard = document.querySelector('#add');
const addCloseButton = document.querySelector('.add__close');
const addSaveButton = document.querySelector('.add__save');
const profileNameField = document.querySelector('.profile__name');
const profileOccupationField = document.querySelector('.profile__occupation');
const popupNameField = document.querySelector('.popup__input_type_name');
const popupOccupationField = document.querySelector('.popup__input_type_occupation');
const formEdit = document.getElementById('profile-edit');
const name = document.querySelector('#name');
const occupation = document.querySelector('#occupation');
const placeName = document.querySelector('#place-name');
const placeLink = document.querySelector('#place-link');
const addForm = document.getElementById('add-card');
const closeGalleryPopup = document.querySelector('.gallery__close');
const popupAlt =  document.querySelector('.popup__place-title');


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
    const newCard = createNewCard(item.name, item.link);
    galleryGrid.appendChild(newCard);
}

initialCards.forEach(initCards);

addButon.addEventListener('click', (e) =>{
    openPopup(addCard);
})

addCloseButton.addEventListener('click', (e) =>{
    closePopup(addCard);
})

function createNewCard (name, link){
    const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
    newCard.querySelector('.gallery__title').textContent = name;
    newCard.querySelector('.gallery__image').setAttribute('src', link);
    newCard.querySelector('.gallery__image').setAttribute('alt', name);
    addListeners(newCard);
    return newCard;
}

function addSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    const newCard = createNewCard(placeName.value, placeLink.value);
    galleryGrid.prepend(newCard);
    closePopup(popupEdit);
}

function addListeners(newCard){
    newCard.querySelector('.gallery__deletebutton').addEventListener('click', (e) => {
        e.target.closest('.gallery__item').remove();
    })
    newCard.querySelector('.gallery__likebutton').addEventListener('click', (e) => {
        e.target.classList.toggle('gallery__likebutton_is-active');
    })
    newCard.querySelector('.gallery__image').addEventListener('click', (e) => {
        openPopup(document.querySelector('#show'));
        document.querySelector('.gallery__popup').setAttribute('src', e.target.getAttribute('src'));
        popupAlt.innerText = e.target.getAttribute('alt');
    })
}

closeGalleryPopup.addEventListener('click', (e) => {
    closePopup(e.target.closest('#show'));
})

addForm.addEventListener('submit', addSubmitHandler);

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

//****************End of the new code for Sprint 5***********************//

function copyInitialValuesAndOpenPopup(){
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

addSaveButton.addEventListener("click", (e) =>{
    closePopup(addCard);
})

editButton.addEventListener("click", copyInitialValuesAndOpenPopup);
formEdit.addEventListener('submit', handleSubmitForm);
closeButton.addEventListener("click", (e) => {
    closePopup(popupEdit);
});




