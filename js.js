let aPressCount = 0;

// Check for 10 consecutive "A" key presses
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'a') {
        aPressCount++;
        if (aPressCount === 10) {
            document.getElementById('cheaterPage').classList.add('background');
            document.getElementById('loadingScreen').classList.add('foreground');

            // Simulate loading screen
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.remove('foreground');
                document.getElementById('loadingScreen').classList.add('background');
                document.getElementById('mainMenu').classList.add('foreground');
            }, 3000); // 3 seconds loading time
        }
    } else {
        aPressCount = 0; // Reset count if any other key is pressed
    }
});

// Function to start the game
function startGame() {
    document.getElementById('mainMenu').classList.add('background');
    document.getElementById('osLoadingScreen').classList.add('foreground');

    // Simulate OS loading screen
    setTimeout(() => {
        document.getElementById('osLoadingScreen').classList.remove('foreground');
        document.getElementById('osLoadingScreen').classList.add('background');
        document.getElementById('desktop').classList.add('foreground');
        updateTime();
    }, 3000); // 3 seconds OS loading time
}

// Function to update the time in the taskbar
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Initial time update
updateTime();

// Function to open the folder window
function openFolderWindow() {
    document.getElementById('folderWindow').style.display = 'block';
}

// Function to open the Notepad window
function openNotepad() {
    document.getElementById('notepadWindow').style.display = 'block';
}

// Function to open the BSOD window
function openBSOD() {
    const bsodWindow = document.getElementById('bsodWindow');
    bsodWindow.style.display = 'block';

    // Redirect to google.com after 30 seconds
    setTimeout(() => {
        window.location.replace("https://www.google.com");
    }, 30000); // 30 seconds
}

// Function to close the window
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Function to minimize the window
function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

// Function to maximize the window
function maximizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement.style.width === '100%') {
        windowElement.style.width = '600px';
        windowElement.style.height = '400px';
        windowElement.style.top = '100px';
        windowElement.style.left = '100px';
    } else {
        windowElement.style.width = '100%';
        windowElement.style.height = '100%';
        windowElement.style.top = '0';
        windowElement.style.left = '0';
    }
}