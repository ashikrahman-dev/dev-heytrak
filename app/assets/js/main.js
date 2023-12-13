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
// const closeButton = document.getElementById('close-button');

const sidebar = document.getElementById('offCanvasMenu'); // Sidebar
const toggleBtn = document.getElementById('toggleBtn'); // Icon

// document.onclick = function(e) {
//     if(e.target.id !== 'offCanvasMenu' && e.target.id !== 'toggleBtn') {
//         toggleBtn.classList.remove('open');
//         sidebar.classList.remove('open');
//     }
// }

// toggleBtn.onclick = function() {
//     toggleBtn.classList.toggle('open');
//     sidebar.classList.toggle('open');
// }

function toggleMenu() {
    toggleBtn.classList.toggle('open');
    sidebar.classList.toggle('open');
}

// Event listener for the toggle button
toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the click from propagating to the document
    toggleMenu();
});

// Event listener on the document to handle clicks outside the menu
document.addEventListener('click', function(e) {
    const isClickInside = sidebar.contains(e.target) || toggleBtn.contains(e.target);
    
    if (!isClickInside) {
        toggleBtn.classList.remove('open');
        sidebar.classList.remove('open');
    }
});


// toggleMenu.addEventListener('click', () => {
//     sidebar.classList.toggle('open')
// });

// closeButton.addEventListener('click', () => {
//     sidebar.classList.remove('open');
// });


