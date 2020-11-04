'use strict';

function showModal() {
 const popupEngineer = document.querySelector('.popup_engineer');
 const popupEngineerBtn = document.querySelector('.popup_engineer_btn');


 popupEngineerBtn.addEventListener('click', (e) => {
     popupEngineer.classList.add('show');
 });


 popupEngineer.addEventListener('click', (e) => {
    const target = e.target;
    if (target === popupEngineer || target.parentElement.classList.contains('popup_close')) {
        popupEngineer.classList.remove('show');
    }
 });
}

export default showModal;