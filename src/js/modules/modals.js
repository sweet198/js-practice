'use strict';

const showModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.classList.add('modal-open');
}

const closeAllModals = () => {
    const windows = document.querySelectorAll('[data-modal]');

    windows.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
    });
}

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.classList.remove('modal-open');
    closeAllModals();
}

const modals = () => {

    function useModals(modalSelector, closeSelector, triggerSelector, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                closeAllModals();
                showModal(modalSelector);
            });
        });

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal && closeClickOverlay) {
                closeModal(modalSelector);
            }
        });

        close.addEventListener('click', () => {
            closeModal(modalSelector);
        });
    }

    function showModalByTime(modalSelector, time) {
        setTimeout(() => showModal(modalSelector), time);
    }

    useModals('.popup_engineer', '.popup_engineer .popup_close', '.popup_engineer_btn');
    useModals('.popup', '.popup .popup_close', '.phone_link');
    useModals('.popup_calc', '.popup_calc_close', '.popup_calc_btn');
    useModals('.popup_calc_profile', '.popup_calc_profile_close', '.popup_calc_button', false);
    useModals('.popup_calc_end', '.popup_calc_end_close', '.popup_calc_profile_button', false);

    // showModalByTime('.popup', 5000);
}

export default modals;
export {showModal, closeModal};