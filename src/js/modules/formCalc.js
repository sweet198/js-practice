'use strict';

import {closeModal, showModal} from './modals';

const formCalc = (firstModalSelector, secondModalSelector, thirdModalSelector) => {
    const firstModal = document.querySelector(firstModalSelector);
    const secondModal = document.querySelector(secondModalSelector);
    const thirdModal = document.querySelector(thirdModalSelector);

    let firstModalTrigger = firstModal.querySelector('.button');
    let secondModalTrigger = secondModal.querySelector('.button');

    firstModalTrigger.addEventListener('click', () => {
        closeModal(firstModalSelector);
        showModal(secondModalSelector);
    });

    secondModalTrigger.addEventListener('click', () => {
        closeModal(secondModalSelector);
        showModal(thirdModalSelector);
    });
}

export default formCalc;