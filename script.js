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

    // Function to update character info with fade-in effect
  const updateCharacter = (name, imagePath, description) => {
    // Start fade-out
    characterImage.style.opacity = '0'; // Start fading out

    // Wait for fade-out to finish before updating the image and text
    setTimeout(() => {
        // Update the character information
        characterImage.src = imagePath; // Change the image source
        characterName.textContent = name;  
        characterDescription.textContent = description;

        // Start fade-in
        characterImage.style.opacity = '1'; // Fade in the new image
    }, 500); // Match this duration with your CSS fade-out duration
};

    // Initial character display
    updateCharacter("Aoi", "images/characters/aoi.png", "Aoi is the first character in the world of Ratania...");

    // Initial delay before content fades in
    setTimeout(() => {
        document.body.classList.remove("loading");
    }, 3000); // 3-second delay

    // Event listener for character selector
    characterSelector.addEventListener("click", (event) => {
        const target = event.target.closest(".character-capsule");
        if (target) {
            const characterData = target.dataset.character;
            if (characterInfo[characterData]) {
                const { name, imagePath, description } = characterInfo[characterData];
                updateCharacter(name, imagePath, description);
            } else {
                console.warn("Character data not found:", characterData);
            }

            // Optional: Highlight the active capsule
            const capsules = document.querySelectorAll(".character-capsule");
            capsules.forEach(capsule => capsule.classList.remove("active"));
            target.classList.add("active");
        }
    });
});