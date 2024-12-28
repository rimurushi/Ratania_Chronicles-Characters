document.addEventListener("DOMContentLoaded", () => {
    const capsules = document.querySelectorAll(".capsule");
    const characterImage = document.getElementById("character-image");
    const characterName = document.getElementById("character-name");
    const characterDescription = document.getElementById("character-description");

    // Characters data
    const characters = {
        Aoi: {
            name: "Aoi",
            description: "A compassionate leader, Aoi oversees the team with wisdom and care.",
            image: "images/characters/aoi-main.png"
        },
        Ax: {
            name: "Ax",
            description: "Ax is the muscle of the group, known for his bravery and strength.",
            image: "images/characters/ax-main.png"
        },
        Ri: {
            name: "Ri",
            description: "The strategist, Ri always has a plan up their sleeve.",
            image: "images/characters/ri-main.png"
        },
        Ace: {
            name: "Ace",
            description: "Ace is the wildcard, bringing unpredictability and creativity to the team.",
            image: "images/characters/ace-main.png"
        },
        Akai: {
            name: "Akai",
            description: "The quiet observer, Akai sees what others miss.",
            image: "images/characters/akai-main.png"
        },
        Kimi: {
            name: "Kimi",
            description: "The heart of the group, Kimi keeps morale high with her charm.",
            image: "images/characters/kimi-main.png"
        },
        Eir: {
            name: "Eir",
            description: "The enigmatic thinker, Eir provides deep insights and solutions.",
            image: "images/characters/eir-main.png"
        }
    };

    // Fade-in/out effect for descriptions
    const fadeInOut = (element, newContent, callback) => {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");

        element.addEventListener("animationend", function handleFadeOut() {
            element.classList.remove("fade-out");
            element.textContent = newContent;
            element.classList.add("fade-in");
            element.removeEventListener("animationend", handleFadeOut);
            if (callback) callback();
        });
    };

    // Add event listeners to capsules
    capsules.forEach(capsule => {
        capsule.addEventListener("click", () => {
            const characterKey = capsule.dataset.character;
            const characterData = characters[characterKey];

            if (characterData) {
                // Update character image
                characterImage.src = characterData.image;
                characterImage.alt = characterData.name;

                // Update character name and description with fade-in/out effect
                fadeInOut(characterName, characterData.name);
                fadeInOut(characterDescription, characterData.description);
            }
        });
    });

    // Initial state
    const initialCharacter = characters.Aoi;
    if (initialCharacter) {
        characterImage.src = initialCharacter.image;
        characterImage.alt = initialCharacter.name;
        characterName.textContent = initialCharacter.name;
        characterDescription.textContent = initialCharacter.description;
    }
});
