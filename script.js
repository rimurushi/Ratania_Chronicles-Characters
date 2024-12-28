document.addEventListener("DOMContentLoaded", () => {
    const characterSelector = document.querySelector(".character-selector");
    const characterImage = document.querySelector("#character-image");
    const characterName = document.querySelector("#character-name");
    const characterDescription = document.querySelector("#character-description");

    const audio = new Audio("Ascend.mp3");
    audio.loop = true;

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
    // Fade out the current character display
    characterImage.classList.remove("show");
    characterName.classList.remove("show");
    characterDescription.classList.remove("show");
    document.querySelector("#character-title").classList.remove("show"); // Remove show class from title

    // Wait for the fade-out transition to complete before updating content
    setTimeout(() => {
        characterImage.src = imagePath; // Update the image source
        characterName.textContent = name;

        // Update the title and description text
        document.querySelector("#character-title").textContent = name; // Set title
        characterDescription.textContent = description;

        // Fade in the new character display
        characterImage.classList.add("show");
        characterName.classList.add("show");
        
        // Fade in the title and description from left to right
        document.querySelector("#character-title").classList.add("show"); // Add show class to title
        characterDescription.classList.add("show");
    }, 500); // Delay to match the fade-out duration
};

    // Initial delay before content fades in
    setTimeout(() => {
        document.body.classList.remove("loading"); // Remove loading class to fade in content
    }, 3000); // 3-second delay

    // Event listener for character selector
    characterSelector.addEventListener("click", (event) => {
    const target = event.target.closest(".character-capsule");
    if (target) {
        // Remove 'active' class from all capsules
        const capsules = document.querySelectorAll(".character-capsule");
        capsules.forEach(capsule => capsule.classList.remove("active"));

        // Add 'active' class to the selected capsule
        target.classList.add("active");

        const characterData = target.dataset.character;
        if (characterInfo[characterData]) {
            const { name, imagePath, description } = characterInfo[characterData];
            updateCharacter(name, imagePath, description);
        } else {
            console.warn("Character data not found:", characterData);
        }
    }
});

    // Initial character display
    updateCharacter("Aoi", "images/characters/aoi.png", "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with...");
});