const characterImage = document.getElementById('character-image');  // Main character image
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const characterCapsules = document.querySelectorAll(".character-capsule");

// Define the character data with appropriate image sources
const characters = {
    aoi: {
        name: "Aoi",
        description: "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with...",
        image: "images/characters/aoi.png", // Main character image (middle)
        capsuleImage: "images/capsules/aoi-custom.png" // Capsule image (inside the selector)
    },
    ax: {
        name: "Ax",
        description: "Ax is a fierce warrior with a mysterious past. His quest for redemption leads him to Ratania...",
        image: "images/characters/ax.png",
        capsuleImage: "images/capsules/ax-custom.png"
    },
    ri: {
        name: "Ri",
        description: "Ri is a swift and agile character with unmatched skill in the art of stealth...",
        image: "images/characters/ri.png",
        capsuleImage: "images/capsules/ri-custom.png"
    },
    ace: {
        name: "Ace",
        description: "Ace is a powerful sorcerer with control over elemental forces. His role in Ratania's story is crucial...",
        image: "images/characters/ace.png",
        capsuleImage: "images/capsules/ace-custom.png"
    },
    akai: {
        name: "Akai",
        description: "Akai is a skilled archer and the protector of her village. Her knowledge of nature is unmatched...",
        image: "images/characters/akai.png",
        capsuleImage: "images/capsules/akai-custom.png"
    },
    eir: {
        name: "Eir",
        description: "Eir is a healer who uses magic to mend wounds and protect those in need. Her role in the world of Ratania is vital...",
        image: "images/characters/eir.png",
        capsuleImage: "images/capsules/eir-custom.png"
    },
    kimi: {
        name: "Kimi",
        description: "Kimi is a young and talented inventor, known for creating devices that enhance the abilities of her allies...",
        image: "images/characters/kimi.png",
        capsuleImage: "images/capsules/kimi-custom.png"
    }
};

// Set the character details (name, description, and main image)
function setCharacterDetails(character) {
    document.getElementById("character-name").innerText = character.name;
    document.getElementById("character-description").innerText = character.description;
    
    // This line updates the main character image in the center of the screen
    document.getElementById("character-image").src = character.image; // Update main character image
}

// Character Selector (click events for each capsule)
characterCapsules.forEach(capsule => {
    capsule.addEventListener("click", function() {
        const selectedCharacter = characters[capsule.getAttribute("data-character")];
        setCharacterDetails(selectedCharacter); // Update character details when a capsule is clicked
    });
});
    
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

// Character Selector (capsules)
characterCapsules.forEach(capsule => {
    capsule.addEventListener("click", function() {
        // Get character ID from the data-character attribute
        const selectedCharacter = characters[capsule.getAttribute("data-character")];

        // Update the character details (image, name, description)
        setCharacterDetails(selectedCharacter);

        // Update the capsule image to reflect the selection
        const capsuleImage = capsule.querySelector("img");
        capsuleImage.src = selectedCharacter.capsuleImage;
        
        // Optionally: You can add an 'active' class to highlight the selected capsule
        characterCapsules.forEach(c => c.classList.remove("active"));
        capsule.classList.add("active");
    });
});
