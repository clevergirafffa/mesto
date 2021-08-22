const profileFormValidated = document.forms.profileEditForm;
const addFormValidated = document.forms.addCardForm;

//Здравствуйте! Извините пожалуйста за ошибки - очень пыталась успеть до дедлайна. С функцией enableValidation совсем непонятно что делать и куда ее запихнуть(

function isFieldValid(input){
    input.setCustomValidity('');
    return input.checkValidity();
}

function validateField(input){
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    isFieldValid(input);
    errorElement.innerText = input.validationMessage;

}

function setSubmitButtonState(button, state){
    if(state){
        button.removeAttribute('disabled');
        button.classList.add('popup__save_valid');
        button.classList.remove('popup__save_invalid');
    }
    else{
        button.setAttribute('disabled', true);
        button.classList.remove('popup__save_valid');
        button.classList.add('popup__save_invalid');
    }
}

function handlerInputForm(event){
    const form = event.currentTarget;
    const input = event.target;
    const submitButton = form.querySelector('.button');
    validateField(input);
    if(form.checkValidity()){
        setSubmitButtonState(submitButton, true);
    }
    else{
        setSubmitButtonState(submitButton, false);
    }

}

function sendForm(event){
    event.preventDefault();
    const form = event.currentTarget;
    if(form.checkValidity()){
        form.reset();
    }

}

profileFormValidated.addEventListener('submit', sendForm);
profileFormValidated.addEventListener('input', handlerInputForm, true);

addFormValidated.addEventListener('submit', sendForm);
addFormValidated.addEventListener('input', handlerInputForm, true);