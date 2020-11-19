'use strict';

const showModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    document.body.classList.add('modal-open');
}

const modals = () => {

    function useModals(modalSelector, closeSelector, triggerSelector) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);


        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                showModal(modalSelector);
            });
        });

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        });
    }

    function showModalByTime(modalSelector, time) {
        setTimeout(() => showModal(modalSelector), time);
    }

    useModals('.popup_engineer', '.popup_engineer .popup_close', '.popup_engineer_btn');
    useModals('.popup', '.popup .popup_close', '.phone_link');
    useModals('.popup_calc', '.popup_calc_close', '.popup_calc_btn');
    showModalByTime('.popup', 5000);
}

export default modals;