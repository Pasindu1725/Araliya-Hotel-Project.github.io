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

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Select the input fields
    const fullNameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const opinionInput = document.querySelector('textarea');

    // Get the values of the input fields
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const opinion = opinionInput.value.trim();

    // Check if any of the fields are empty
    if (fullName === '' || email === '' || opinion === '') {
        // Show error message
        alert('Please fill in all fields');
        return; // Stop further execution
    }
    else{
        alert('Thank You For Your Feedback!');
        return;
    }

    // If all fields are filled, submit the form
    this.submit();
});




// Function to fetch reviews from a server or API
function fetchReviews() {
    // Simulated data for demonstration
    const reviews = [
        { name: "John Doe", feedback: "Great hotel, amazing service!" },
        { name: "Jane Smith", feedback: "Beautiful rooms and friendly staff." },
        { name: "Alex Johnson", feedback: "Had a wonderful experience. Highly recommended!" }
        // Add more reviews as needed
    ];

    return reviews;
}

// Function to display reviews in the HTML
function displayReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviews = fetchReviews(); // Fetch reviews

    // Clear existing reviews
    reviewsContainer.innerHTML = '';

    // Loop through each review and create HTML elements to display them
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const namePara = document.createElement('p');
        namePara.textContent = `Name: ${review.name}`;

        const feedbackPara = document.createElement('p');
        feedbackPara.textContent = `Feedback: ${review.feedback}`;

        // Append name and feedback paragraphs to the review div
        reviewDiv.appendChild(namePara);
        reviewDiv.appendChild(feedbackPara);

        // Append the review div to the reviews container
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the displayReviews function to initially load reviews when the page loads
displayReviews();


