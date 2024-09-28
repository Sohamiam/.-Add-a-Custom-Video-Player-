let video = document.getElementById('videoPlayer');
let overlay = document.getElementById('overlay');

let tapCount = 0;

// Function to handle tap events
overlay.addEventListener('click', (event) => {
    const currentTime = video.currentTime;
    const width = overlay.clientWidth;

    tapCount++;

    // Handle single tap (Play/Pause functionality)
    if (tapCount === 1) {
        setTimeout(() => {
            if (tapCount === 1) {
                // Single tap action: Play/Pause
                if (video.paused) {
                    video.play(); // Play the video
                } else {
                    video.pause(); // Pause the video
                }
            }
            tapCount = 0; // Reset tap count
        }, 300); // Wait for 300ms to detect further taps
        return; // Wait for double/triple taps
    }

    // Handle double tap actions
    if (tapCount === 2) {
        if (event.clientX < width / 3) {
            // Double-tap left side
            video.currentTime = Math.max(0, currentTime - 10); // Move 10 seconds back
        } else if (event.clientX > (width / 3) * 2) {
            // Double-tap right side
            video.currentTime = Math.min(video.duration, currentTime + 10); // Move 10 seconds forward
        }
        tapCount = 0; // Reset tap count
    }

    // Handle triple tap actions
    if (tapCount === 3) {
        if (event.clientX < width / 3) {
            // Triple-tap left side
            showCommentSection(); // Show comment section
        } else if (event.clientX > (width / 3) * 2) {
            // Triple-tap right side
            closeWebsite(); // Close the website
        } else {
            // Triple-tap middle
            nextVideo(); // Move to next video
        }
        tapCount = 0; // Reset tap count
    }
});

// Dummy functions for the gestures
function showCommentSection() {
    alert("Showing comment section");
}

function closeWebsite() {
    window.close();
}

function nextVideo() {
    alert("Moving to the next video");
    // You can implement the actual logic to load the next video here
}
