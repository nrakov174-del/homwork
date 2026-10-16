//1
function calculateFinalPrice(price, discount, tex) {
	return (price - 100 / discount) * tex + (price - 100 / discount);
}
console.log(calculateFinalPrice(100, 10, 0.2));
//2
function checkAccess(rol, password) {
	if (rol == "admin" && password == 123456) {
		console.log("Доступ разрешен");
	} else {
		console.log("Доступ запрещен");
	}
}
checkAccess("admin", 123456);
//3
function getTimeOfDay(time) {
	switch (true) {
		case time <= 5 && time >= 0:
			return console.log("Ночь");
			break;
		case time <= 11 && time >= 6:
			return console.log("Утро");
			break;
		case time <= 17 && time >= 12:
			return console.log("День");
			break;
		case time <= 23 && time >= 18:
			return console.log("Вечер");
			break;
		default:
			console.log("Некоректное время");
			break;
	}
}
getTimeOfDay(73);
//4
function findFirstEven(start, end) {
	let count = 0;
	if (start > end) {
		console.log("Некоректные данные");
	}
	for (i = start; i <= end; i++) {
		if (i % 2 == 0) {
			count += 1;
			console.log(i);
			break;
		}
		if (i == end && count == 0) {
			console.log("четных чисел нет");
		}
	}
}
findFirstEven(15, 122);
