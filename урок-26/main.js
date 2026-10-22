//1
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);
//2
function getUserAverageAge(users) {
	let sum_Age = 0;
	for (let i = 0; i < users.length; i++) {
		sum_Age += users[i].age;
	}
	console.log((sum_Age /= users.length));
}
getUserAverageAge(users);
//3
function getAllAdmins(users) {
	all_admin = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			all_admin.push(users[i].name);
		}
	}
	console.log(all_admin);
}
getAllAdmins(users);
//4
const arr = ["aert", "bert", "sert", "gert"];
function first(arr, n) {
	if (n > arr.length || n < 0) {
		console.error(
			`диопозон n не должен быть меньше ноля и не должен превышать длинну массива(${arr.length})`,
		);
	} else if (n === undefined) {
		console.log(arr[0]);
	} else {
		console.log(arr.slice(0, n));
	}
}
first(arr, 4);
