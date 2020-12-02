import {showModal, closeAllModals} from './modals';

function pictures () {
    const pictures = document.querySelectorAll('a > .preview');

    const popup = document.createElement('div');
    popup.classList.add('popup_picture');
    popup.classList.add('popup');
    popup.setAttribute('data-modal', 'true');
    document.body.appendChild(popup);
    const img = document.createElement('img');
    img.style.cssText = `
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
    `;



    popup.appendChild(img);

    pictures.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                img.src = `assets/img/our_works/big_img/${i + 1}.png`;
                showModal('.popup_picture');
            });
    });
    popup.addEventListener('click', (e) => {
        const target = e.target;
        if (target === popup) {
            closeAllModals();
        }
    });

}

export default pictures;