const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterInfo = document.querySelector('.character-info'); // Selecting the description section

const characters = {
    aoi: {
        image: 'images/aoi.png',
        name: 'Aoi',
        description: 'Aoi is the first character in the world of Ratania. A brave warrior, Aoi\'s journey begins with...'
    },
    ax: {
        image: 'images/ax.png',
        name: 'Ax',
        description: 'Ax is a strong and silent protector. His mysterious past is the key to unlocking the fate of Ratania...'
    },
    ri: {
        image: 'images/ri.png',
        name: 'Ri',
        description: 'Ri is a cunning tactician with a quick wit. Her strategies shape the battles in Ratania...'
    },
    ace: {
        image: 'images/ace.png',
        name: 'Ace',
        description: 'Ace is a skilled marksman with unmatched precision. He is on a quest to seek vengeance for a past betrayal...'
    },
    akai: {
        image: 'images/akai.png',
        name: 'Akai',
        description: 'Akai is a fiery fighter, passionate about justice and revenge. Her heart is as fierce as her blade...'
    },
    eir: {
        image: 'images/eir.png',
        name: 'Eir',
        description: 'Eir is a healer and protector, bringing light to even the darkest corners of Ratania...'
    },
    kimi: {
        image: 'images/kimi.png',
        name: 'Kimi',
        description: 'Kimi is a mysterious rogue, whose true intentions are always hidden in the shadows...'
    }
};

function setCharacterDetails(character) {
    // Fade out the current image and description
    characterImage.classList.remove('fade-in');
    characterImage.classList.add('fade');
    characterInfo.classList.remove('show'); // Remove the show class for fade-out

    // Wait for the fade-out transition to finish
    setTimeout(() => {
        // Change the character details (image, name, description)
        characterImage.src = character.image;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;

        // Fade in the new character details
        characterImage.classList.remove('fade');
        characterImage.classList.add('fade-in');
        characterInfo.classList.add('show'); // Show the description with animation
    }, 500); // Duration of the fade-out transition
}

// Attach click event to each character capsule
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        const characterKey = capsule.getAttribute('data-character').toLowerCase();  // Get the character name and convert it to lowercase
        const character = characters[characterKey];  // Access the character object based on the lowercase name

        if (character) {
            setCharacterDetails(character);  // Update the character details
        }
    });
});
