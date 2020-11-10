'use strict';

import './services/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
// import tabs from './modules/tabsExample';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs();
    // tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    // tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})
