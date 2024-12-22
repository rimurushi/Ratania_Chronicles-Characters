const capsules = document.querySelectorAll('.character-capsule');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');

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

        // First, ensure the fade-out effect is applied correctly
        characterImage.classList.remove('fade-in'); // Remove any lingering fade-in class
        characterImage.classList.add('fade'); // Apply fade-out class

        // Wait for the fade-out transition to complete before changing the image and details
        setTimeout(() => {
            // Change the character details
            characterImage.src = character.image;
            characterName.textContent = character.name;
            characterDescription.textContent = character.description;

            // Remove fade-out effect and re-apply fade-in
            characterImage.classList.remove('fade');
            characterImage.classList.add('fade-in');
        }, 500); // Match the duration of the fade-out transition
    });
});
