<script>
    function changeCharacter(character) {
        var characterImage = document.getElementById("character-image");
        var characterName = document.getElementById("character-name");
        var characterDescription = document.getElementById("character-description");

        // Character details for each option (updated with PNG file format)
        var characters = {
            aoi: {
                image: 'images/aoi.png', // Updated to PNG
                name: 'Aoi',
                description: 'Aoi is a strong and brave character from the world of Ratania. A skilled warrior and protector.'
            },
            ax: {
                image: 'images/ax.png', // Updated to PNG
                name: 'Ax',
                description: 'Ax is a cunning strategist with a mysterious past, feared by many in the world of Ratania.'
            },
            ri: {
                image: 'images/ri.png', // Updated to PNG
                name: 'Ri',
                description: 'Ri is a fast and agile rogue, known for their quick reflexes and stealth abilities.'
            },
            ace: {
                image: 'images/ace.png', // Updated to PNG
                name: 'Ace',
                description: 'Ace is a legendary marksman with unmatched precision and an unbreakable resolve.'
            },
            akai: {
                image: 'images/akai.png', // Updated to PNG
                name: 'Akai',
                description: 'Akai is a fierce warrior with a fiery temper, skilled in both hand-to-hand combat and swordsmanship.'
            },
            eir: {
                image: 'images/eir.png', // Updated to PNG
                name: 'Eir',
                description: 'Eir is a healer and sorcerer, wielding the power of nature to protect the people of Ratania.'
            },
            kimi: {
                image: 'images/kimi.png', // Updated to PNG
                name: 'Kimi',
                description: 'Kimi is a young prodigy with a mysterious connection to the ancient magic of Ratania.'
            }
        };

        // Update the character display based on the selected character
        characterImage.src = characters[character].image;
        characterName.textContent = characters[character].name;
        characterDescription.textContent = characters[character].description;
    }
</script>
