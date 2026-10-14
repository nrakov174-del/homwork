//1
for (let i = 1; i <= 20; i++) {
	if (i % 4 == 0) {
		continue;
	}
	console.log(i);
}
//2
original_meaning = +prompt("введите изначальное значение");
let count = 1;
for (i = 1; i <= original_meaning; i++) {
	count *= i;
}
console.log(count);
//3
let board = "";
for (i = 1; i <= 4; i++) {
	if (i % 2 === 0) {
		for (j = 1; j <= 4; j++) {
			board += "0";
			board += "#";
		}
	} else {
		for (j = 1; j <= 4; j++) {
			board += "#";
			board += "0";
		}
	}
	board += "\n";
}
console.log(board);
