'use strict'

function tabs() {

    function useTabs(tabsLinksSelector, tabsSelector, activeClass) {
        const tabsLinks = document.querySelectorAll(tabsLinksSelector);
        const tabs = document.querySelectorAll(tabsSelector);

        function hideTabs() {
            tabs.forEach(tab => tab.style.display = 'none');
            tabsLinks.forEach(tabsLink => tabsLink.classList.remove(activeClass));
        }

        hideTabs();

        function showTab(i = 0) {
            tabs[i].style.display = 'block';
            tabsLinks[i].classList.add(activeClass);
        }

        showTab();

        tabsLinks.forEach((tabsLink, i) => {
            tabsLink.addEventListener('click', (e) => {
                console.log(tabsLink, e.target);
                e.preventDefault();
                hideTabs();
                showTab(i);
            });
        })
    }
    // const tabsLinks = document.querySelectorAll('.glazing_block a');
    // const tabs = document.querySelectorAll('.glazing_content');

    useTabs('.glazing_block a', '.glazing_content', 'active');

}

export default tabs;