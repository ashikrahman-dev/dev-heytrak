// Tab JS 

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})


// Accordion JS 


const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
        } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
        }
    };
});


// Mobile menu 

const sidebar = document.getElementById('off-canvas-menu');
const closeButton = document.getElementById('close-button');
const humbargMenu = document.getElementById('humbarg');


humbargMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open')
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// sidebar.addEventListener('click', (event) => {
//     sidebar.classList.add('open');
// });
