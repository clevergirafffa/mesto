const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled'
}

class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formElement = formElement;

    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
            });
            this._setEventListeners();
        });
    }

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
            });
        });
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(this._formElement, inputElement);
        }
    };

    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
    };

    _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
}

export {settings, FormValidator};













