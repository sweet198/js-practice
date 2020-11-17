'use strict';

import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs();
    forms('.form');
    // tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    // tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})
