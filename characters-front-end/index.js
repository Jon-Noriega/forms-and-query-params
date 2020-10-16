const baseURL = 'http://localhost:7000';
const charactersURL = `${baseURL}/characters`;

const charactersContainer = document.querySelector('.characters-container');

fetch(charactersURL)
  .then(parseJSON)
  .then(renderCharacters);

function renderCharacters(characters) {
  characters.forEach(displayCharacter);
}

function displayCharacter(character) {
  const characterCard = document.createElement('div');
  characterCard.classList.add('character-card');

  const characterName = document.createElement('h2');
  characterName.textContent = character.name;
  
  const characterImage = document.createElement('img');
  characterImage.src = character.image;
  
  const characterLikeness = document.createElement('p');
  characterImage.textContent = character.likeness;

  characterCard.append(characterName, characterImage, characterLikeness);
  charactersContainer.append(characterCard);
}

function parseJSON(response) {
  return response.json();
}