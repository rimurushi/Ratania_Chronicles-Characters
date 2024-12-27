const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');

const characters = {
    character1: { image: 'images/aoi.png', name: 'Aoi', description: 'Aoi is the first character...' },
    character2: { image: 'images/ax.png', name: 'Ax', description: 'Ax is a strong and silent protector...' },
    character3: { image: 'images/ri.png', name: 'Ri', description: 'Ri is a cunning tactician...' },
    character4: { image: 'images/ace.png', name: 'Ace', description: 'Ace is a skilled marksman...' },
    character5: { image: 'images/akai.png', name: 'Akai', description: 'Akai is a fiery fighter...' },
    character6: { image: 'images/eir.png', name: 'Eir', description: 'Eir is a healer and protector...' },
    character7: { image: 'images/kimi.png', name: 'Kimi', description: 'Kimi is a mysterious rogue...' }
};

const selectorImages = {
    character1: 'images/aoi-custom.png',
    character2: 'images/ax-custom.png',
    character3: 'images/ri-custom.png',
    character4: 'images/ace-custom.png',
    character5: 'images/akai-custom.png',
    character6: 'images/eir-custom.png',
    character7: 'images/kimi-custom.png'
};

// Function to update character details with fade-in/out effects
function setCharacterDetails(character) {
    const characterInfo = document.querySelector('.character-info');
    const characterImageDisplay = document.querySelector('.character-display img');
    
    // Fade out the current character details
    characterInfo.classList.remove('show');
    characterImageDisplay.classList.remove('show');
    
    // Wait for the fade-out transition to finish before updating
    setTimeout(() => {
        // Update the character details (image, name, description)
        characterImage.src = character.image;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;

        // Fade in the updated character details
        characterInfo.classList.add('show');
        characterImageDisplay.classList.add('show');
    }, 500);  // Duration matches the transition duration (0.5 seconds for fade-out, fade-in)
}

// Event listeners for each capsule
capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
        capsules.forEach(c => c.classList.remove('active'));
        capsule.classList.add('active');
        const characterId = capsule.getAttribute('data-character');
        const character = characters[characterId];
        const selectorImage = selectorImages[characterId];
        capsule.querySelector('img').src = selectorImage;
        setCharacterDetails(character);
    });
});