// Get timer elements
const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');
const timer4 = document.getElementById('timer4');
const dateTimePicker = document.getElementById('dateTimePicker');

// Set future constant time (e.g., 10 seconds from page load)
const futureTime = new Date(Date.now() + 10000);

// Function to format date and time
function formatDateTime(date) {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

// Initialize timers
timer1.textContent = formatDateTime(new Date());
timer3.textContent = formatDateTime(futureTime);

// Update running timer every second
const intervalId = setInterval(() => {
    const now = new Date();
    timer2.textContent = formatDateTime(now);
    
    // Check if running time matches future time
    if (timer2.textContent === timer3.textContent) {
        // Remove the second timer
        timer2.remove();

        // Start syncing timer3 with timer1
        setInterval(() => {
            timer3.textContent = formatDateTime(new Date());
        }, 1000);

        // Clear the initial interval
        clearInterval(intervalId);
    }
}, 1000);

// Function to set the next timer
function setNextTimer() {
    const selectedDateTime = new Date(dateTimePicker.value);
    timer4.textContent = formatDateTime(selectedDateTime);
    
    // Update the new timer every second once the selected time is reached
    const syncInterval = setInterval(() => {
        const now = new Date();
        if (now >= selectedDateTime) {
            clearInterval(syncInterval);
            setInterval(() => {
                timer4.textContent = formatDateTime(new Date());
            }, 1000);
        }
    }, 1000);
}
