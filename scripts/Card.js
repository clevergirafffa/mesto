const show = document.querySelector('#show');
const galleryPopup = document.querySelector('.popup__gallery-popup');
const placeTitle = document.querySelector('.popup__place-title');

import {openPopup} from "./index.js";

export default class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.name;
        this._selector = selector;
    }

    _getElement() {
        const cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        return cardElement;
    }

    generate() {
        this._element = this._getElement();
        this._element.querySelector('.gallery__title').textContent = this._name;
        this._element.querySelector('.gallery__image').src = this._link;
        this._element.querySelector('.gallery__image').alt = this._alt;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.gallery__deletebutton').addEventListener('click', (e) => {
            this._handleDelete(e);
        });
        this._element.querySelector('.gallery__likebutton').addEventListener('click', (e) => {
            this._handleLike(e);
        });
        this._element.querySelector('.gallery__image').addEventListener('click', (e) => {
            this._handleImageClick(e);
        });
    }

    _handleDelete(e) {
        e.target.closest('.gallery__item').remove();
    }

    _handleLike(e) {
        e.target.classList.toggle('gallery__likebutton_is-active');
    }

    _handleImageClick(e) {
        openPopup(show);
        galleryPopup.setAttribute('src', e.target.getAttribute('src'));
        placeTitle.innerText = e.target.getAttribute('alt');
    }
}


