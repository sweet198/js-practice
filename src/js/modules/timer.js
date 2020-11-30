const timer = (selector, deadline) => {
    const endTime = new Date(deadline);

    const showMessage = () => {
        const monthArr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'декабря'];
        const saleMessage = document.querySelector('.sale_subtitle');
        saleMessage.innerHTML = `Успей сэкономить на остеклении! Только до ${endTime.getDate()} ${monthArr[endTime.getMonth()]}!`;
    }

    showMessage();

    const getRemainsTime = () => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((time / (1000 / 60) % 60));
        const seconds = Math.floor((time / 1000) % 60);

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    const setRemainsTime = () => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        const remainsTime = getRemainsTime(deadline);

        const addZero = (num) => {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        days.innerHTML = addZero(remainsTime['days']);
        hours.innerHTML = addZero(remainsTime['hours']);
        minutes.innerHTML = addZero(remainsTime['minutes']);
        seconds.innerHTML = addZero(remainsTime['seconds']);

        if (remainsTime['total'] <= 0) {
            clearInterval(timerInterval);
        }
    }
    setRemainsTime();

    const timerInterval = setInterval(setRemainsTime, 1000);
}

export default timer;