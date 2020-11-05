'use strict';

function modal() {
    const modalEngineer = document.querySelector('.popup_engineer');
    const modalEngineerOpenBtn = document.querySelector('.popup_engineer_btn');
    const modalCall = document.querySelector('.popup');
    const modalCallOpensBtn = document.querySelectorAll('.phone_link');

    function modalOpen(modal, modalOpenBtn) {
        modalOpenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });
    }

    modalOpen(modalEngineer, modalEngineerOpenBtn);

    modalCallOpensBtn.forEach(modalCallOpenBtn => {
        modalOpen(modalCall, modalCallOpenBtn);
    })

    function modalClose(modal) {
        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal || target.parentElement.classList.contains('popup_close')) {
                modal.classList.remove('show');
            }
        });
    }

    modalClose(modalEngineer);
    modalClose(modalCall);
}

export default modal;