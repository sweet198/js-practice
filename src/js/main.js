import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from "./modules/timer";
import pictures from "./modules/pictures";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs();
    forms(modalState);
    timer('#timer','2021-02-05');
    pictures();
})
