// Function to change the character image and description
function changeCharacter(character) {
    const image = document.querySelector('.character-display img');
    const description = document.querySelector('.character-info');
    
    // Set new image source (you can replace the image URLs with your own)
    if (character === 'character-1') {
        image.src = 'character-1.jpg'; // Replace with the actual path
        document.getElementById('character-name').textContent = 'Character 1';
        document.getElementById('character-description').textContent = 'Description for Character 1.';
    } else if (character === 'character-2') {
        image.src = 'character-2.jpg'; // Replace with the actual path
        document.getElementById('character-name').textContent = 'Character 2';
        document.getElementById('character-description').textContent = 'Description for Character 2.';
    }
    
    // Fade-in image and show description
    image.classList.add('fade-in');
    description.classList.add('show');
}

// Optional music toggle
document.getElementById('toggle-music').addEventListener('click', function() {
    // Toggle music playback here
});
