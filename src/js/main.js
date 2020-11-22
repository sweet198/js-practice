'use strict';

import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

import forms from './modules/forms';
import formCalc from "./modules/formCalc";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs();
    forms('.popup_engineer');
    forms('.popup');
    forms('.popup_calc_end');
    // formCalc('.popup_calc','.popup_calc_profile', '.popup_calc_end');
    // tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    // tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})
