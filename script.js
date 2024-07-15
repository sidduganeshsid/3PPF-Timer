// // Get timer elements
// const timer1 = document.getElementById('timer1');
// const timer2 = document.getElementById('timer2');
// const timer3 = document.getElementById('timer3');

// // Set future constant time (e.g., 10 seconds from page load)
// const futureTime = new Date(Date.now()+ 10000);

// // Function to format date and time
// function formatDateTime(date) {
//     return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
// }

// // Initialize timers
// timer1.textContent = formatDateTime(new Date());
// timer3.textContent = formatDateTime(futureTime);

// // Update running timer every second
// setInterval(() => {
//     const now = new Date();
//     timer2.textContent = formatDateTime(now);
    
//     // Check if running time matches future time
//     if (timer2.textContent === timer3.textContent) {
//         // Start syncing timer3 with timer2
//         const syncInterval = setInterval(() => {
//             timer3.textContent = formatDateTime(new Date());
//         }, 1000);

//         // Clear the sync interval after some time if needed (optional)
//         // setTimeout(() => clearInterval(syncInterval), 60000); // Example: Stop sync after 60 seconds
//     }
// }, 1000);

// // Get timer elements
// const timer1 = document.getElementById('timer1');
// const timer2 = document.getElementById('timer2');
// const timer3 = document.getElementById('timer3');

// // Set future constant time (e.g., 10 seconds from page load)
// const futureTime = new Date(Date.now() + 10000);

// // Function to format date and time
// function formatDateTime(date) {
//     return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
// }

// // Initialize timers
// timer1.textContent = formatDateTime(new Date());
// timer3.textContent = formatDateTime(futureTime);

// // Update running timer every second
// const intervalId = setInterval(() => {
//     const now = new Date();
//     timer2.textContent = formatDateTime(now);
    
//     // Check if running time matches future time
//     if (timer2.textContent === timer3.textContent) {
//         // Remove the second timer
//         timer2.remove();

//         // Start syncing timer3 with timer1
//         setInterval(() => {
//             timer3.textContent = formatDateTime(new Date());
//         }, 1000);

//         // Clear the initial interval
//         clearInterval(intervalId);
//     }
// }, 1000);




//2nd timer stops when it meets with third timer.
// Get timer elements
const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');

// Set future constant time (e.g., 10 seconds from page load)
const futureTime = new Date(Date.now() + (1000*60*60*24*17));

// Function to format date and time
function formatDateTime(date) {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

// Initialize timers
timer1.textContent = formatDateTime(new Date());
timer3.textContent = formatDateTime(futureTime);

// Update running timer every second
const updateInterval = setInterval(() => {
    const now = new Date();
    timer2.textContent = formatDateTime(now);
    
    // Check if running time matches future time
    if (now >= futureTime) {
        // Stop updating timer2
        clearInterval(updateInterval);

        // Start syncing timer3 with timer2
        const syncInterval = setInterval(() => {
            timer3.textContent = formatDateTime(new Date());
        }, 1000);

        // Clear the sync interval after some time if needed (optional)
        // setTimeout(() => clearInterval(syncInterval), 60000); // Example: Stop sync after 60 seconds
    }
}, 1000);
