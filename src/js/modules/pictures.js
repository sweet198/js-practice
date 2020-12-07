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
    /*const picturesParent = document.querySelector('.works');
    const picturePopup = document.createElement('div');
    const bigPicture = document.createElement('img');

    picturePopup.classList.add('popup');
    picturesParent.appendChild(picturePopup);

    picturePopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;       
    `;

    picturePopup.appendChild(bigPicture);

    picturesParent.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            picturePopup.style.display ='flex';
            const path = target.parentNode.getAttribute('href');
            bigPicture.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            picturePopup.style.display ='none';
        }
    });*/
}

export default pictures;