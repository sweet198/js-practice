import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs();
    forms('.popup_engineer');
    forms('.popup');
    forms('.popup_calc_end');
})
