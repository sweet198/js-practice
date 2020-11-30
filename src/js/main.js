import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs();
    forms(modalState);
    timer('2021-02-05');
})
