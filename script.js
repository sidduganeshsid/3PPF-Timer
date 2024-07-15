// Get timer elements
const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');

// Set future constant time (e.g., 10 seconds from page load)
const futureTime = new Date(Date.now()*(1000*60*60*24*15));
// console.log(Date.now());

// Function to format time
function formatTime(date) {
    return date.toLocaleTimeString();
}

// Initialize timers
timer1.textContent = formatTime(new Date());
timer3.textContent = formatTime(futureTime);

// Update running timer every second
setInterval(() => {
    const now = new Date();
    timer2.textContent = formatTime(now);
    
    // Check if running time matches future time
    if (timer2.textContent === timer3.textContent) {
        // Start syncing timer3 with timer2
        const syncInterval = setInterval(() => {
            timer3.textContent = formatTime(new Date());
        }, 1000);

        // Clear the sync interval after some time if needed (optional)
        // setTimeout(() => clearInterval(syncInterval), 60000); // Example: Stop sync after 60 seconds
    }
}, 1000);
 