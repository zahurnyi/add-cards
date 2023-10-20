'use strict'
document.body.style.background = 'tomato';

const nameCard = document.querySelector('.input__name');
const namePrice = document.querySelector('.input__price');
const countCard = document.querySelector('.input__count');
const imagesCard = document.querySelector('.input__images');
const wrapperCards = document.querySelector('.wrapper__cards');
const buttonAdd = document.querySelector('.button');

buttonAdd.addEventListener('click', createCard);

function createCard() {
	const wrapperCard = document.createElement('div');
	wrapperCard.classList.add('wrapper-card');
	const cardImages = document.createElement('img'); // Створюємо <img> елемент для зображення

	if (imagesCard.files.length > 0) {
		const selectedImage = imagesCard.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			cardImages.src = event.target.result;
		};

		reader.readAsDataURL(selectedImage);
	}

	const cardName = document.createElement('span');
	const cardCount = document.createElement('span');
	const cardPrice = document.createElement('span');

	cardCount.textContent = 'Counter: ' + countCard.value;
	cardName.textContent = 'Name: ' + nameCard.value;
	cardPrice.textContent = 'Price for item: ' + namePrice.value;

	wrapperCard.append(cardImages, cardName, cardPrice, cardCount);
	wrapperCards.append(wrapperCard);
}
