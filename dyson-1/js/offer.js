"use strict";
const popularBt = document.querySelector(".pop");
const cheapBt = document.querySelector(".cheap");
const expensiveBt = document.querySelector(".expensive");
const releasesBt = document.querySelector(".new-releases");
const highRatingBt = document.querySelector(".high-rating");
const details = document.querySelector(".offer__dropdown");
const summary = document.querySelector(".offer__dropdown-button");
const container = document.querySelector(".offer__cards-products-container");
const summaryText = document.querySelector(".offer__dropdown-text");

function sortBlocks(direction) {
	const cards = Array.from(container.children);

	cards.sort((a, b) => {
		const priceElA = a.querySelector(".offer__card-product--discounted-price");
		const priceElB = b.querySelector(".offer__card-product--discounted-price");
		const numA =
			parseFloat(
				priceElA.textContent.replace(/\s+/g, "").replace(/[^\d.]/g, ""),
			) || 0;
		const numB =
			parseFloat(
				priceElB.textContent.replace(/\s+/g, "").replace(/[^\d.]/g, ""),
			) || 0;

		return direction === "asc" ? numA - numB : numB - numA;
	});

	cards.forEach((card) => container.appendChild(card));
	details.open = false;
}

expensiveBt.addEventListener("click", () => {
	sortBlocks("desc");
	summaryText.textContent = "Сначала дорогие";
});

cheapBt.addEventListener("click", () => {
	sortBlocks("asc");
	summaryText.textContent = "Сначала дешёвые";
});
popularBt.addEventListener("click", () => {
	summaryText.textContent = "Сначала популярные";
	details.open = false;
});

releasesBt.addEventListener("click", () => {
	summaryText.textContent = "Новинки";
	details.open = false;
});
highRatingBt.addEventListener("click", () => {
	summaryText.textContent = "Высокий рейтинг";
	details.open = false;
});
