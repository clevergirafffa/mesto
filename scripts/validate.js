//Доброе утро! Вроде бы сделала все) кроме пары мест замены блока add на save, потому что несмотря на кажущуюся идентичность содержимого
//при попытке подмены все разваливается в мелкие лоскуты.

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

const enableValidation = (arg) => {
    const formList = Array.from(document.querySelectorAll(arg.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, arg.inputSelector, arg.submitButtonSelector, arg.inactiveButtonClass);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled'
});

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass){
    console.log(inactiveButtonClass);
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}


