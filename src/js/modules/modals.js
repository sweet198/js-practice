'use strict';

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
                modal.classList.add('show');
                document.body.classList.add('modal-open');
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
        setTimeout(() => {
            document.querySelector(modalSelector).classList.add('show');
            document.body.classList.add('modal-open');
        }, time);
    }

    useModals('.popup_engineer', '.popup_engineer .popup_close', '.popup_engineer_btn');
    useModals('.popup', '.popup .popup_close', '.phone_link');
    showModalByTime('.popup', 3000);
}

export default modals;