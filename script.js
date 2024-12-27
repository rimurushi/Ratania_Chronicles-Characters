const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterInfo = document.querySelector('.character-info');

// Character data
const characters = {
    aoi: {
        image: 'images/aoi.png',
        name: 'Aoi',
        description: "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with..."
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

// Selector images for the capsules
const selectorImages = {
    aoi: 'images/aoi-custom.png',
    ax: 'images/ax-custom.png',
    ri: 'images/ri-custom.png',
    ace: 'images/ace-custom.png',
    akai: 'images/akai-custom.png',
    eir: 'images/eir-custom.png',
    kimi: 'images/kimi-custom.png'
};

// Function to update character details with animation
function setCharacterDetails(character) {
    // Trigger fade-out and slide-out
    characterInfo.classList.remove('show');

    // Wait for the animation to complete
    setTimeout(() => {
        // Update content
        characterImage.src = character.image;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;

        // Trigger fade-in and slide-in
        characterInfo.classList.add('show');
    }, 1000); // Match transition duration in CSS
}

// Attach click event to capsules
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        const characterKey = capsule.dataset.character; // Get key from data attribute
        const character = characters[characterKey];
        const selectorImage = selectorImages[characterKey]; // Access the correct selector image

        if (character) {
            // Update the capsule image with the custom version, if available
            const capsuleImage = capsule.querySelector('.capsule-image');
            if (capsuleImage && selectorImage) {
                capsuleImage.src = selectorImage;
            }

            // Update the main character display
            setCharacterDetails(character);
        }
    });
});
