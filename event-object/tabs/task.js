const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
        tabs.forEach((tabItem, tabIndex) => {
            if (index === tabIndex) {
                tabItem.classList.add('tab_active');
            } else {
                tabItem.classList.remove('tab_active');
            }
        })
        contents.forEach((contentItem, contentIndex) => {
            if (index === contentIndex) {
                contentItem.classList.add('tab__content_active');
            } else {
                contentItem.classList.remove('tab__content_active');
            }
        } )
    })
} )