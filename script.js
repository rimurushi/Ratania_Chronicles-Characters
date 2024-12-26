// Ensure the page starts with the 'loading' class
document.body.classList.add('loading');

// Wait for the page to fully load
window.addEventListener('load', () => {
    setTimeout(() => {
        // Remove the 'loading' class after the fade effect time
        document.body.classList.remove('loading');
    }, 1500); // Adjust this duration to control how long the fade effect lasts
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

// Function to set character details
function setCharacterDetails(character) {
    // Fade out the current image and description
    characterImage.classList.remove('fade-in');
    characterImage.classList.add('fade');
    characterInfo.classList.remove('show'); // Remove the show class for fade-out

    // Wait for the fade-out transition to finish
    setTimeout(() => {
        // Change the character details (image, name, description)
        characterImage.src = character.image;
        characterName.textContent = character.
