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
}

function onCompanyOrProjectHeaderClick(oEvent){
    //oEvent.target.nextElementSibling.classList.toggle('hidden-section-open');
    if(window.getComputedStyle(oEvent.target.nextElementSibling).display === 'none'){
        oEvent.target.nextElementSibling.style.display = 'block';
    }else{
        oEvent.target.nextElementSibling.style.display = 'none';
    }
}