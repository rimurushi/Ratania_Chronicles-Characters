// Ensure the page starts with the 'loading' class
document.body.classList.add('loading');

// Wait for 5 seconds before showing content
window.addEventListener('load', () => {
    setTimeout(() => {
        // Remove the 'loading' class after 3 seconds
        document.body.classList.remove('loading');
    }, 3000 ); // 3-second delay
});

const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterInfo = document.querySelector('.character-info'); // Selecting the description section

const characters = {
    character1: {
        image: 'images/aoi.png',
        name: 'Aoi',
        description: 'Aoi is the first character in the world of Ratania. A brave warrior, Aoi\'s journey begins with...'
    },
    character2: {
        image: 'images/ax.png',
        name: 'Ax',
        description: 'Ax is a strong and silent protector. His mysterious past is the key to unlocking the fate of Ratania...'
    },
    character3: {
        image: 'images/ri.png',
        name: 'Ri',
        description: 'Ri is a cunning tactician with a quick wit. Her strategies shape the battles in Ratania...'
    },
    character4: {
        image: 'images/ace.png',
        name: 'Ace',
        description: 'Ace is a skilled marksman with unmatched precision. He is on a quest to seek vengeance for a past betrayal...'
    },
    character5: {
        image: 'images/akai.png',
        name: 'Akai',
        description: 'Akai is a fiery fighter, passionate about justice and revenge. Her heart is as fierce as her blade...'
    },
    character6: {
        image: 'images/eir.png',
        name: 'Eir',
        description: 'Eir is a healer and protector, bringing light to even the darkest corners of Ratania...'
    },
    character7: {
        image: 'images/kimi.png',
        name: 'Kimi',
        description: 'Kimi is a mysterious rogue, whose true intentions are always hidden in the shadows...'
    }
};

capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        const characterId = capsule.getAttribute('data-character');
        const character = characters[characterId];

        // Fade out image and description
        characterImage.classList.remove('fade-in');
        characterImage.classList.add('fade');

        characterInfo.classList.remove('show'); // Remove the show class for description fade-out

        // Wait for the fade-out transition to finish
        setTimeout(() => {
            // Change the character details (image, name, description)
            characterImage.src = character.image;
            characterName.textContent = character.name;
            characterDescription.textContent = character.description;

            // Fade-in image and description with sliding effect
            characterImage.classList.remove('fade');
            characterImage.classList.add('fade-in');

            characterInfo.classList.add('show'); // Apply the show class for description fade-in and slide
        }, 500); // Ensure it's synced with fade-out duration
    });
});
// Select the audio element and the button
const music = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");
const musicIcon = document.getElementById("music-icon");

// Auto-play music on first click (after user gesture)
toggleButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicIcon.src = "images/pause-icon.png"; // Set the icon to pause
    } else {
        music.pause();
        musicIcon.src = "images/play-icon.png"; // Set the icon to play
    }
});
