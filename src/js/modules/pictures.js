function pictures () {
    const container = document.querySelector('.works .container')
    console.log(container);
    const pictures = document.querySelectorAll('a > .preview');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.classList.add('hide');
    container.appendChild(popup);
    const img = document.createElement('img');
    popup.appendChild(img);

    pictures.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                img.src = `assets/img/our_works/big_img/${i + 1}.png`;
                popup.classList.add('show');
                popup.classList.remove('hide');
            })
    })
}

export default pictures;