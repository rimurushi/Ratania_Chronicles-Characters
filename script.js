// JavaScript to handle character selection
const capsules = document.querySelectorAll('.character-capsule'); // Select all character capsules
const characterImage = document.getElementById('character-image'); // Main character image
const characterName = document.getElementById('character-name'); // Main character name
const characterDescription = document.getElementById('character-description'); // Main character description

// Character data
const characters = {
    aoi: {
        image: 'aoi.jpg', // Main character image for Aoi
        name: 'Aoi',
        description: 'Description for Aoi goes here.'
    },
    ax: {
        image: 'ax.jpg',
        name: 'Ax',
        description: 'Description for Ax goes here.'
    },
    ri: {
        image: 'ri.jpg',
        name: 'Ri',
        description: 'Description for Ri goes here.'
    },
    ace: {
        image: 'ace.jpg',
        name: 'Ace',
        description: 'Description for Ace goes here.'
    },
    akai: {
        image: 'akai.jpg',
        name: 'Akai',
        description: 'Description for Akai goes here.'
    },
    eir: {
        image: 'eir.jpg',
        name: 'Eir',
        description: 'Description for Eir goes here.'
    },
    kimi: {
        image: 'kimi.jpg',
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
