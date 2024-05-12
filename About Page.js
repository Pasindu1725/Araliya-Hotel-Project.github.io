/*DROPDOWN MENU*/
const barBtn = document.querySelector('.bar_btn');
const barBtnIcon = document.querySelector('.bar_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

barBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    barBtnIcon.classList = isOpen
        ? 'fas fa-times'
        : 'fas fa-bars';
};


// Add event listener for scroll event
window.addEventListener('scroll', function() {
    // Check the vertical scroll position
    if (window.scrollY > 0) {
        // Add a class to the header to change its background color to full black
        header.classList.add('black-bg');
    } else {
        // Remove the class if the user scrolls back to the top
        header.classList.remove('black-bg');
    }
});

// Select the header element
const header = document.querySelector('header');

// Add event listener for scroll event
window.addEventListener('scroll', function() {
    // Check the vertical scroll position
    if (window.scrollY > 0) {
        // Add a class to the header to change its background color to full black
        header.classList.add('black-bg');
    } else {
        // Remove the class if the user scrolls back to the top
        header.classList.remove('black-bg');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has visited the About page before
    if (!localStorage.getItem('aboutPageVisited')) {
        // Display an alert message when the page is visited for the first time
        alert('Welcome to the About page! Learn more about Araliya Hotel here.');

        // Set a flag in localStorage to indicate that the page has been visited
        localStorage.setItem('aboutPageVisited', true);
    }
});
