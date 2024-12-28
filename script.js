// JavaScript for Ratania Character Showcase with Enhancements

document.addEventListener("DOMContentLoaded", () => {
  const characterSelector = document.querySelector(".character-selector");
  const characterImage = document.querySelector(".character-image");
  const characterName = document.querySelector(".character-name");
  const characterDescription = document.querySelector(".character-description");
  const audio = new Audio("audio/background-music.mp3"); // Replace with your audio path
  const musicToggle = document.querySelector("#music-toggle");

  // Set audio to loop
  audio.loop = true;

  // Function to update character info with fade-in effect
  const updateCharacter = (name, imagePath, description) => {
    characterImage.classList.add("fade-out");
    characterName.classList.add("fade-out");
    characterDescription.classList.add("fade-out");

    setTimeout(() => {
      characterImage.src = imagePath;
      characterName.textContent = name;
      characterDescription.textContent = description;

      characterImage.classList.remove("fade-out");
      characterImage.classList.add("fade-in");
      characterName.classList.remove("fade-out");
      characterName.classList.add("fade-in");
      characterDescription.classList.remove("fade-out");
      characterDescription.classList.add("fade-in");
    }, 300);

    setTimeout(() => {
      characterImage.classList.remove("fade-in");
      characterName.classList.remove("fade-in");
      characterDescription.classList.remove("fade-in");
    }, 600);
  };

  // Event listener for character selector
  characterSelector.addEventListener("click", (event) => {
    const target = event.target.closest(".capsule");

    if (target) {
      const { characterName: name, characterImage: imagePath, characterDescription: description } = target.dataset;

      updateCharacter(name, imagePath, description);
    }
  });

  // Music toggle functionality
  musicToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      musicToggle.textContent = "Pause Music";
    } else {
      audio.pause();
      musicToggle.textContent = "Play Music";
    }
  });

  // Initial state
  audio.play();
  musicToggle.textContent = "Pause Music";
});

/* CSS for fade-in/out effects */
const style = document.createElement("style");
style.textContent = `
  .fade-in {
    animation: fadeIn 0.3s ease-in forwards;
  }

  .fade-out {
    animation: fadeOut 0.3s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
