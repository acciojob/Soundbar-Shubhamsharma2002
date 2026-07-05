const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");

// Create a map to store our DOM audio elements
const audioElements = {};

// 1. Create and append the audio elements to the DOM so Cypress can detect them
sounds.forEach(sound => {
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    document.body.appendChild(audio); // This puts it in the DOM
    audioElements[sound] = audio;
});

// 2. Helper function to stop all audio elements
function stopSongs() {
    sounds.forEach(sound => {
        const audio = audioElements[sound];
        audio.pause();
        audio.currentTime = 0;
    });
}

// 3. Generate the trigger buttons dynamically
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

    button.addEventListener("click", () => {
        stopSongs(); // Stop any other running audio first
        audioElements[sound].play(); // Play the clicked track
    });

    buttonsContainer.appendChild(button);
});

// 4. Create and insert the global stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";
stopButton.addEventListener("click", stopSongs);

buttonsContainer.appendChild(stopButton);