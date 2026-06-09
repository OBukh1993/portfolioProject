function onContactFormSubmit(oEvent){
    oEvent.preventDefault();

    const nameValue = document.getElementById('user-name')?.value.trim() || '';
    const surnameValue = document.getElementById('user-surname')?.value.trim() || '';
    const emailValue = document.getElementById('user-email')?.value.trim() || '';
    const phoneValue = document.getElementById('user-phone')?.value.trim() || '';

    if (!formValidation.validateUserName(nameValue)) {
        alert('Invalid input: user-name is required. Please enter your name.');
        return;
    }

    if (!formValidation.validateUserSurname(surnameValue)) {
        alert('Invalid input: user-surname is required. Please enter your surname.');
        return;
    }

    if (!formValidation.validateUserEmail(emailValue)) {
        alert('Invalid input: user-email is not valid. Please enter a correct email address.');
        return;
    }

    if (!formValidation.validateUserPhone(phoneValue)) {
        alert('Invalid input: user-phone is not valid. Please enter a correct phone number.');
        return;
    }

    alert("Thank you for your message!");
}

const formValidation = {
    validateUserName(value) {
        const trimmedValue = value.trim();
        const latinTextPattern = /^[A-Za-z]+$/;
        return trimmedValue.length > 0 && latinTextPattern.test(trimmedValue);
    },

    validateUserSurname(value) {
        const trimmedValue = value.trim();
        const latinTextPattern = /^[A-Za-z]+$/;
        return trimmedValue.length > 0 && latinTextPattern.test(trimmedValue);
    },

    validateUserEmail(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailPattern.test(value);
    },

    validateUserPhone(value) {
        const phonePattern = /^\+?[0-9]{1,3}[\s\-]?\(?[0-9]{1,4}\)?([\s\-]?[0-9]{2,4}){2,4}$/;
        return phonePattern.test(value);
    }
}

function registerDomEvents(){
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', onContactFormSubmit);
}

if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', ()=>{
        registerDomEvents();
    });
}

module.exports = { formValidation };