const revButtonScrollMore = document.querySelector(".reviews-button");
const revMoreArticles = document.querySelector(".reviews-more-articles");
const revBtText = document.querySelector(".reviews-button-text");
const revButtonArrow = document.querySelector(".reviews-button-arrow");
revButtonScrollMore.addEventListener("click", () => {
	revMoreArticles.classList.toggle("container-user-reviews--hidden");
	revButtonArrow.classList.toggle("reviews-button-arrow--open");
	if (revMoreArticles.classList.contains("container-user-reviews--hidden")) {
		revBtText.textContent = "Показать еще";
	} else {
		revBtText.textContent = "Cкрыть";
	}
});
