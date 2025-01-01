let aPressCount = 0;

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'a') {
        aPressCount++;
        if (aPressCount === 10) {
            document.getElementById('cheaterPage').classList.add('background');
            document.getElementById('loadingScreen').classList.add('foreground');

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

    setTimeout(() => {
        document.getElementById('osLoadingScreen').classList.remove('foreground');
        document.getElementById('osLoadingScreen').classList.add('background');
        document.getElementById('desktop').classList.add('foreground');
        updateTime();
    }, 3000); 
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateTime, 60000);

updateTime();

function openFolderWindow() {
    document.getElementById('folderWindow').style.display = 'block';
}

function openNotepad() {
    document.getElementById('notepadWindow').style.display = 'block';
}

function openBSOD() {
    const bsodWindow = document.getElementById('bsodWindow');
    bsodWindow.style.display = 'block';

    setTimeout(() => {
        window.location.replace("https://www.google.com");
    }, 30000); // 30 seconds
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

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
