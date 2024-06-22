document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('background-audio');
    if (audio) {
        audio.volume = 0.15;
    } else {
        console.error("Audio element not found");
    }
});