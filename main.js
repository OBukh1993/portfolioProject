document.addEventListener('DOMContentLoaded', ()=>{
    registerDomEvents();
});

function registerDomEvents(){
    Array.from(document.getElementsByClassName('company-header')).forEach(element => {
        element.addEventListener('click', onCompanyOrProjectHeaderClick);
    });;
    Array.from(document.getElementsByClassName('project-header')).forEach(element => {
        element.addEventListener('click', onCompanyOrProjectHeaderClick);
    });;
    Array.from(document.getElementsByClassName('education-header')).forEach(element => {
        element.addEventListener('click', onCompanyOrProjectHeaderClick);
    });;
    Array.from(document.getElementsByClassName('skill-image')).forEach(element => {
        element.addEventListener('click', onSkillImageClick);
    });;
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', onContactFormSubmit);
}

function onCompanyOrProjectHeaderClick(oEvent){
    //oEvent.target.nextElementSibling.classList.toggle('hidden-section-open');
    if(window.getComputedStyle(oEvent.target.nextElementSibling).display === 'none'){
        oEvent.target.nextElementSibling.style.display = 'block';
    }else{
        oEvent.target.nextElementSibling.style.display = 'none';
    }
}

function onSkillImageClick(oEvent){
    //alert("Clicked on: " + oEvent.srcElement.alt)
    if(confirm("More info abaut " + oEvent.srcElement.alt + "?")){
        switch(oEvent.srcElement.dataset.type){
            case "ABAP":
                window.open("https://ru.wikipedia.org/wiki/ABAP/4");
                break;
            case "HANA":
                window.open("https://en.wikipedia.org/wiki/SAP_HANA");
                break;
            case "WEB":
                window.open("https://en.wikipedia.org/wiki/Front-end_web_development");
                break;
            case "SAPUI5":
                window.open("https://en.wikipedia.org/wiki/OpenUI5");
                break;
            case "GIT":
                window.open("https://en.wikipedia.org/wiki/Git");
                break;
        }
    }
}

function onContactFormSubmit(oEvent){
    oEvent.preventDefault();
    alert("Thank you for your message!");
}