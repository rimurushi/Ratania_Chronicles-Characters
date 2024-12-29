document.addEventListener("DOMContentLoaded", () => {
    const characterSelector = document.querySelector(".character-selector");
    const characterImage = document.querySelector("#character-image");
    const characterName = document.querySelector("#character-name");
    const characterDescription = document.querySelector("#character-description");
    const music = document.querySelector("#background-music");
    const toggleMusicButton = document.querySelector("#toggle-music");

    // Character information
    const characterInfo = {
        aoi: {
            name: "Aoi",
            imagePath: "images/characters/aoi.png",
            description: "Aoi is the first character in the world of Ratania."
        },
        ax: {
            name: "Ax",
            imagePath: "images/characters/ax.png",
            description: "Ax is known for his strength."
        },
        ri: {
            name: "Ri",
            imagePath: "images/characters/ri.png",
            description: "Ri is a clever strategist."
        },
        ace: {
            name: "Ace",
            imagePath: "images/characters/ace.png",
            description: "Ace is a skilled marksman."
        },
        akai: {
            name: "Akai",
            imagePath: "images/characters/akai.png",
            description: "Akai is a fierce protector."
        },
        eir: {
            name: "Eir",
            imagePath: "images/characters/eir.png",
            description: "Eir is a healer with a gentle heart."
        },
        kimi: {
            name: "Kimi",
            imagePath: "images/characters/kimi.png",
            description: "Kimi is a master of stealth."
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
    updateCharacter("Aoi", "images/characters/aoi.png", "Aoi is the first character in the world of Ratania.");

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

    // Music toggle functionality
    toggleMusicButton.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            toggleMusicButton.textContent = "Pause Music";
        } else {
            music.pause();
            toggleMusicButton.textContent = "Play Music";
        }
    });

    // Start playing music automatically
    music.play();
});