const writeBt = document.querySelector(".write-review__button");
const modal = document.querySelector(".modal");
const closeBt = document.querySelector(".modal__close");
closeBt.addEventListener("click", function (event) {
	modal.className = "modal";
});
writeBt.addEventListener("click", () => {
	modal.classList.add("modal--open");
});

function getFormData(formElement) {
	const formData = new FormData(formElement);
	const name = formData.get("username");
	const text = formData.get("message");
	return { name, text };
}

const form = document.querySelector(".modal__form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const data = getFormData(this);
	console.log(data.name);
	console.log(data.text);
});

function addCommentBlock(name, text) {
	const html = `
    <div class="reviews__user-reviews padding-reviews">
								<div class="user-reviews__name-and-estimation">
									<p class="user-reviews__name title-small--two">${name}</p>
                                    <img
										src="./images/estimation-star.png"
										alt="5 звезд(оценка)"
										width="161"
										height="30"
										class="user-reviews__estimation--img"
									/>
								</div>
								<div class="user-reviews__reviews-text-and-fails">
									<h3 class="user-reviews__reviews-title-text">Отличный фен</h3>
									<p class="user-reviews__reviews-text text-large--two">${text}
									</p>
								</div>
								<span class="user-reviews__date">21/05/2022 </span>
							</div>`;
	const container = document.querySelector(".container-user-reviews");
	container.insertAdjacentHTML("afterbegin", html);
}
form.addEventListener("submit", function (event) {
	event.preventDefault();

	const data = getFormData(this);
	addCommentBlock(data.name, data.text);

	this.reset();
});
