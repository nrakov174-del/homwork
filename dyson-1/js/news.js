const buttonScrollMore = document.querySelector(".news-button");
const moreArticles = document.querySelector(".news-more-articles");
const btText = document.querySelector(".news-button-text");
const buttonArrow = document.querySelector(".news-button-arrow");
buttonScrollMore.addEventListener("click", () => {
	moreArticles.classList.toggle("news__article-container--hidden");
	buttonArrow.classList.toggle("news-button-arrow--open");
	if (moreArticles.classList.contains("news__article-container--hidden")) {
		btText.textContent = "Показать еще";
	} else {
		btText.textContent = "Cкрыть";
	}
});
