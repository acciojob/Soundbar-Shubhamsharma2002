//your JS code here. If required.
// Array matching the target sound file names inside the 'sounds' folder
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");

// Track references to the active playing audio object
let currentAudio = null;

// Function to stop any actively playing track and reset its playback timeline
function stopSongs() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Generate sound triggers dynamically 
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = sound.charAt(0).toUpperCase() + sound.slice(1); // Capitalize button names

    button.addEventListener("click", () => {
        stopSongs(); // Clear any running audio track first
        
        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });

    buttonsContainer.appendChild(button);
});

// Create and insert the global stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";
stopButton.addEventListener("click", stopSongs);

buttonsContainer.appendChild(stopButton);