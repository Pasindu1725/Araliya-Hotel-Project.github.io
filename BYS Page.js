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


document.addEventListener('DOMContentLoaded', function() {
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const allSteps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    // Set the first step as active initially
    allSteps[currentStep].classList.add('active-step');

    function updateStepDisplay() {
        allSteps.forEach((step, index) => {
            step.classList.remove('active-step');
            if (index === currentStep) {
                step.classList.add('active-step');
            }
        });
    }

    // Handle next button actions
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const inputs = allSteps[currentStep].querySelectorAll('input, textarea, select');
            let isValid = true;

            // Check if all inputs are filled
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error'); // Add error class to highlight the field
                } else {
                    input.classList.remove('error'); // Remove error class if filled
                }
            });

            if (isValid) {
                if (currentStep < allSteps.length - 1) {
                    currentStep++;
                    updateStepDisplay();
                    // Call updateSummary when reaching the last step
                    if (currentStep === allSteps.length - 1) {
                        updateSummary();
                    }
                }
            } else {
                alert('Please fill in all the required fields.'); // Show error message
            }
        });
    });

    // Handle previous button actions
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateStepDisplay();
            }
        });
    });

    // Update the summary details based on user input
    function updateSummary() {
        const fullname = document.getElementById('fullname').value;
        const idNumber = document.getElementById('id-number').value;
        const checkinDate = document.getElementById('checkin-date').value;
        const checkoutDate = document.getElementById('checkout-date').value;
        const roomType = document.getElementById('room-type').value;
        const packageSelected = document.getElementById('package').value;
        const transfer = document.getElementById('transfer').checked;

        document.getElementById('detail-name').textContent = fullname;
        document.getElementById('detail-id').textContent = idNumber;
        document.getElementById('detail-checkin').textContent = checkinDate;
        document.getElementById('detail-checkout').textContent = checkoutDate;
        document.getElementById('detail-roomtype').textContent = roomType;
        document.getElementById('detail-package').textContent = packageSelected;
        document.getElementById('detail-transfer').textContent = transfer ? 'Yes' : 'No';
        document.getElementById('detail-totalcost').textContent = `$${calculateCost(checkinDate, checkoutDate, roomType, packageSelected, transfer).toFixed(2)}`;
    }

    // Calculate the total cost of the booking
    function calculateCost(checkinDate, checkoutDate, roomType, packageSelected, transfer) {
        console.log('checkinDate:', checkinDate, 'checkoutDate:', checkoutDate, 'roomType:', roomType, 'packageSelected:', packageSelected, 'transfer:', transfer);
    
        const roomRates = {
            'Single - $100/night': 100,
            'Double - $150/night': 150,
            'Suite - $200/night': 200
        };
        const packageRates = {
            'No Package': 0,
            'Breakfast - $20/day': 20,
            'All-inclusive - $50/day': 50
        };
        const transferCost = transfer ? 30 : 0;
    
        if (!roomRates[roomType] || !packageRates[packageSelected]) {
            console.error('Invalid room type or package selection');
        }
    
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        const diffDays = Math.max((checkout - checkin) / (1000 * 3600 * 24), 1);  // Ensure at least one day
        console.log('diffDays:', diffDays);
    
        if (isNaN(diffDays)) {
            console.error('Date calculation resulted in NaN');
        }
    
        const totalRoomCost = diffDays * (roomRates[roomType] || 0);
        const totalPackageCost = diffDays * (packageRates[packageSelected] || 0);
        const totalCost = totalRoomCost + totalPackageCost + transferCost;
    
        console.log('Total Cost:', totalCost);
        return totalCost;
    }

    // Handle form submission for booking confirmation
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Always prevent default to manage submission manually
        updateSummary();  // Ensure summary is updated on final submission
        alert('Thank you for your booking. Your reservation is confirmed!'); // Show alert message
    });
});
