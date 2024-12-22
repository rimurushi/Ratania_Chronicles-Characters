// JavaScript to handle character selection
const capsules = document.querySelectorAll('.character-capsule'); // Select all character capsules
const characterImage = document.getElementById('character-image'); // Main character image
const characterName = document.getElementById('character-name'); // Main character name
const characterDescription = document.getElementById('character-description'); // Main character description

// Character data
const characters = {
    aoi: {
        image: 'aoi.png', // Main character image for Aoi
        name: 'Aoi',
        description: 'Description for Aoi goes here.'
    },
    ax: {
        image: 'ax.png',
        name: 'Ax',
        description: 'Description for Ax goes here.'
    },
    ri: {
        image: 'ri.png',
        name: 'Ri',
        description: 'Description for Ri goes here.'
    },
    ace: {
        image: 'ace.png',
        name: 'Ace',
        description: 'Description for Ace goes here.'
    },
    akai: {
        image: 'akai.png',
        name: 'Akai',
        description: 'Description for Akai goes here.'
    },
    eir: {
        image: 'eir.png',
        name: 'Eir',
        description: 'Description for Eir goes here.'
    },
    kimi: {
        image: 'kimi.png',
        name: 'Kimi',
        description: 'Description for Kimi goes here.'
    }
};

// Loop through each capsule and add an event listener
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        const characterId = capsule.getAttribute('data-character'); // Get the character id from the clicked capsule
        const character = characters[characterId]; // Get the data for that character

        // Update the main character display
        characterImage.src = character.image;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;
    });
});
