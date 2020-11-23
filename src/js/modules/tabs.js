'use strict'

const tabs = ()  => {

    function useTabs(tabsLinksSelector, tabsSelector, activeClass, display = 'block') {
        const tabsLinks = document.querySelectorAll(tabsLinksSelector);
        const tabs = document.querySelectorAll(tabsSelector);

        function hideTabs() {
            tabs.forEach(tab => tab.style.display = 'none');
            tabsLinks.forEach(tabsLink => tabsLink.classList.remove(activeClass));
        }

        hideTabs();

        function showTab(i = 0) {
            tabs[i].style.display = display;
            tabsLinks[i].classList.add(activeClass);
        }

        showTab();

        tabsLinks.forEach((tabsLink, i) => {
            tabsLink.addEventListener('click', (e) => {
                e.preventDefault();
                hideTabs();
                showTab(i);
            });
        })
    }

    useTabs('.glazing_block a', '.glazing_content', 'active');
    useTabs('.decoration_item div', '.decoration_content > .row > div', 'after_click');
    useTabs('.balcon_icons_img ', '.big_img img', 'do_image_more', 'inline-block');
}

export default tabs;