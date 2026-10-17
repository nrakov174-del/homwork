//1
const person = {
	name: "Nikita",
	age: 18,
	hobby: "sport",
	favoriteGame: "The Witcher 3",
};
console.log(person);
//2
function isEmpty(object) {
	for (const key in object) {
		return false;
	}
	return true;
}
console.log(isEmpty(person));
//3
const task = {
	title: "название",
	description: "примечание",
	isCompleted: true,
};
function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}

for (const key in (newTask = cloneAndModify(task, { title: "не название" }))) {
	console.log(newTask[key]);
}
//4
const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};
function callAllMethods(obj) {
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
}
callAllMethods(myObject);
