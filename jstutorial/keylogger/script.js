// Get reference to the log display div
const logDiv = document.getElementById("log");

// Get reference to the state display div
const StateDiv = document.getElementById("state");

// Get reference to the Start and Stop buttons
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

// Add event listener to the Start button
startbtn.addEventListener("click", () => {
    // Start listening to keydown and keyup events on the whole document
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleup);

    // Disable the Start button so it can't be clicked again
    startbtn.disabled = true;

    // Enable the Stop button so user can stop the tracking
    stopbtn.disabled = false;
});

// Add event listener to the Stop button
stopbtn.addEventListener("click", () => {
    // Remove keydown and keyup event listeners to stop tracking
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleup); // ✅ Corrected "keyUp" to "keyup"

    // Clear the text content of log and state divs
    logDiv.textContent = "";
    StateDiv.textContent = "";

    // Enable the Start button again
    startbtn.disabled = false;

    // Disable the Stop button
    stopbtn.disabled = true;
});

// Function to handle keydown event
function handleDown(e) {
    // Show which key is pressed down
    logDiv.textContent = `Key ${e.key} Pressed down`;
    // Update the state message
    StateDiv.textContent = "key is down";
}

// Function to handle keyup event
function handleup(e) {
    // Show which key is released
    logDiv.textContent = `Key ${e.key} pressed up`;
    // Update the state message
    StateDiv.textContent = "Key is up";
}
