// 1
let num = 2;
if (num % 2 == 0) {
	console.log("число четное");
} else {
	console.log("число не четное");
}
//2
let age = 78;
let discount = "";
if (age < 18) {
	discount = "10%";
} else if (18 <= age && age <= 65) {
	discount = "20%";
} else if (age > 65) {
	discount = "30%";
}
console.log(discount);

switch (true) {
	case age < 18:
		discount = "10%";
		break;
	case 18 <= age && age <= 65:
		discount = "20%";
		break;
	case age > 65:
		discount = "30%";
		break;
}
console.log(discount);
//3
let userName = prompt("введите имя пользователя");
let password = prompt("введите пороль");
if ((userName == "admin" || userName == "user") && password == "123456") {
	console.log("Доступ разрешен");
} else {
	console.log("Доступ зарещен");
}
//4
let package_weight = prompt("введите вес посылки в кг");
let delivery_type = prompt("введите тип доставки");
if (isNaN(package_weight) || package_weight < 0) {
	alert("введен некоректный вес посылки");
} else {
	if (
		delivery_type == "Стандарт" ||
		delivery_type == "Экспресс" ||
		delivery_type == "Премиум"
	) {
		let base_cost = 0;
		switch (true) {
			case package_weight < 1:
				base_cost = 5;
				break;
			case package_weight >= 1 && package_weight <= 5:
				base_cost = 10;
				break;
			case package_weight > 5:
				base_cost = 15;
				break;
		}
		let coefficient = 0;
		switch (delivery_type) {
			case "Стандарт":
				coefficient = 1;
				break;
			case "Экспресс":
				coefficient = 1.5;
				break;
			case "Премиум":
				coefficient = 2;
				break;
		}
		let final_cost = base_cost * coefficient;
		console.log(`Вес посылки: ${package_weight}`);
		console.log(`Тип доставки: ${delivery_type}`);
		console.log(`Итоговая стоимость: ${final_cost}`);
	} else {
		alert("Неверный тип доставки");
	}
}
