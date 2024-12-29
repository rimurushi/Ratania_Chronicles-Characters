document.addEventListener("DOMContentLoaded", () => {
    const characterSelector = document.querySelector(".character-selector");
    const characterImage = document.querySelector("#character-image");
    const characterName = document.querySelector("#character-name");
    const characterDescription = document.querySelector("#character-description");

    // Character information
    const characterInfo = {
        aoi: {
            name: "Aoi",
            imagePath: "images/characters/aoi.png",
            description: "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with..."
        },
        ax: {
            name: "Ax",
            imagePath: "images/characters/ax.png",
            description: "Ax is known for his strength and determination."
        },
        ri: {
            name: "Ri",
            imagePath: "images/characters/ri.png",
            description: "Ri is a clever strategist, known for her quick thinking and agility."
        },
        ace: {
            name: "Ace",
            imagePath: "images/characters/ace.png",
            description: "Ace is a skilled marksman, always hitting his targets."
        },
        akai: {
            name: "Akai",
            imagePath: "images/characters/akai.png",
            description: "Akai is a fierce protector of Ratania, wielding his sword with great skill."
        },
        kimi: {
            name: "Kimi",
            imagePath: "images/characters/kimi.png",
            description: "Kimi is a master of stealth, often moving unnoticed in the shadows."
        },
        eir: {
            name: "Eir",
            imagePath: "images/characters/eir.png",
            description: "Eir is a healer with a gentle heart, always putting others before herself."
        }
    };

    // Function to preload images
    const preloadImages = () => {
        Object.values(characterInfo).forEach(character => {
            const img = new Image();
            img.src = character.imagePath; // Preload each character image
        });
    };

    // Preload character images
    preloadImages();

    // Function to update character info with fade-in effect
    const updateCharacter = (name, imagePath, description) => {
        characterImage.classList.remove("show"); // Start fade-out

        setTimeout(() => {
            characterImage.src = imagePath; // Update image source
            characterName.textContent = name; // Update name
            characterDescription.textContent = description; // Update description
            characterImage.classList.add("show"); // Fade in
        }, 500); // Delay to match fade-out duration
    };

    // Initial character display
    updateCharacter("Aoi", "images/characters/aoi.png", "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with...");

    // Show the content after 3 seconds
    setTimeout(() => {
        document.querySelector(".container").style.opacity = 1; // Fade in content
    }, 3000);

    // Event listener for character selector
    characterSelector.addEventListener("click", (event) => {
        const target = event.target.closest(".character-capsule");
        if (target) {
            const characterData = target.dataset.character;
            const character = characterInfo[characterData];

            if (character) {
                updateCharacter(character.name, character.imagePath, character.description); // Update character

                const capsules = document.querySelectorAll(".character-capsule");
                capsules.forEach(capsule => capsule.classList.remove("active"));
                target.classList.add("active"); // Highlight active capsule
            }
        }
    });
});