'use strict'

import modals from "./modals";

const forms = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'Идет отправка',
        success: 'Отправлено',
        failure: 'Ошибка',
    };

    forms.forEach((form, id) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(form);
            formData.append("id", `${id}`);

            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            console.log(obj);
            getResource('http://localhost:3000/people', obj)
                .catch(err => console.error(message.failure));
        }, {'once': true});
    });

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
}

export default forms