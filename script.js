const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterInfo = document.querySelector('.character-info');

// Character data (key names should match the data-character values in HTML)
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

// Character selector images (customized versions for the capsules)
const selectorImages = {
    aoi: 'images/aoi-custom.png',
    ax: 'images/ax-custom.png',
    ri: 'images/ri-custom.png',
    ace: 'images/ace-custom.png',
    akai: 'images/akai-custom.png',
    eir: 'images/eir-custom.png',
    kimi: 'images/kimi-custom.png'
};

// Function to update character details with fade-in/out effects
function setCharacterDetails(character) {
    const characterInfo = document.querySelector('.character-info');

    // First, slide and fade out the current description
    characterInfo.classList.remove('show');  // Trigger fade-out and slide-out by removing the 'show' class

    // Wait for the slide-out and fade-out transition to finish before updating
    setTimeout(() => {
        // Update the character details (image, name, description)
        characterImage.src = character.image;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;

        // Now, slide the new description in and fade it in
        characterInfo.classList.add('show');  // Add 'show' class to trigger slide-in and fade-in
    }, 1000);  // Duration should match the transition duration in CSS (1 second)
}

// Attach click event to each character capsule
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        const characterKey = capsule.getAttribute('data-character');  // Get the character key (like 'aoi', 'ax')
        const character = characters[characterKey];  // Access the corresponding character data
        const selectorImage = selectorImages[characterKey];  // Access the correct selector image

        if (character && selectorImage) {
            // Update the selected capsule image (only if needed, usually for display purposes)
            const capsuleImage = capsule.querySelector('.capsule-image');
            capsuleImage.src = selectorImage;

            setCharacterDetails(character); // Update the character details
        }
    });
});
