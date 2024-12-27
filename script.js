const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterContainer = document.querySelector('.container');  // The container for the main character display

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

// Function to update character details with fade-in/out effects
function setCharacterDetails(character) {
    const characterInfo = document.querySelector('.character-info');
    const characterImageElement = document.querySelector('#character-image');  // Target the main character image
    
    // Fade out the current character details
    characterInfo.classList.remove('show');
    characterImageElement.classList.remove('show');
    
    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Update the character details (image, name, description)
        characterImageElement.src = character.image;  // Update the main character image
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;

        // Fade in the new character details
        characterInfo.classList.add('show');
        characterImageElement.classList.add('show');
    }, 500); // Adjust this to match the fade-out duration

    // Optional: Add a background image fade transition for the container (optional)
    const bgImage = new Image();
    bgImage.src = character.image;

    bgImage.onload = function() {
        characterContainer.style.transition = "background-image 0.5s ease-in-out";
        characterContainer.style.backgroundImage = `url('${character.image}')`;
    };
}

// Initialize with default character (Aoi) on page load
setCharacterDetails(characters.aoi);

// Attach click event to each character capsule
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        // Remove the 'active' class from all capsules
        capsules.forEach(c => c.classList.remove('active'));

        // Add 'active' class to the clicked capsule
        capsule.classList.add('active');

        // Get the character ID from the data-character attribute of the capsule
        const characterId = capsule.getAttribute('data-character');

        // Fetch the character data using the character ID
        const character = characters[characterId];

        // Update the character details (image, name, description)
        setCharacterDetails(character);
    });
});
