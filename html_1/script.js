function main () {

	let number = prompt('Input number(max 100)', 100);

	if (number === null) {
		return;
	}
	else {
		if ( number > 100 || number < 0 || isNaN(number) ) {
			alert("Incorrect input");
			return;
		}
	}

	if(number == 1)
		paintTable(1, 1);
	else
		colsAndRows(number);

	searchPrimeNumbers(number);
}

function colsAndRows (number) {

	let difference = min_dif = number, i = 1,
	cols, rows;

	while (true) {

		if ( number % i == 0 ) {
			
			difference = number / i - i;

			if (difference < 0)
				break;

			if (min_dif > difference) {
				min_dif = difference;
				cols = number / i;
				rows = i;
			}

		}

		i++;
	}

	paintTable(cols, rows);
}

function paintTable (count_tr, count_td) {

	let table = document.createElement('table'),
	table_1 = document.getElementById('table_1'),
	number = 0;


	table_1.removeChild(table_1.firstElementChild);
	table.setAttribute('cellspacing', "0");
	table_1.appendChild(table);

	for (let i = 0; i < count_tr; i++) {

		let tr = document.createElement('tr');
		table.appendChild(tr);

		for (let j = 0; j < count_td; j++) {
										
			let td = document.createElement('td');
			td.innerHTML = ++number;
			tr.appendChild(td);

		}

	}

}
	
function searchPrimeNumbers(number) {

	let arr = primeNumbersArr(number), arr_help = [], value = {
		p: 2,
		i: 0
	};

	value.i = value.p * value.p;

	alert(value.i);

	for (var m = 0; m < number; m++) {
		arr_help[m] = false;
	}

	setTimeout(function paintTD() {

		if (!arr_help[value.i]) {

			let element = document.querySelectorAll('td')[value.i - 1];
			element.style.background = 'red';
			arr_help[value.i] = true;

			value = algorithm(value, number, arr);

			setTimeout(paintTD, 200);
		}
		else {

			value = algorithm(value, number, arr);

			setTimeout(paintTD, 0);
		}
			
	}, 1000);
		
}

function algorithm (value, number, arr) {

	value.i += value.p;

	if (value.i > number) {

				value.p++;

				if (value.p*value.p > number) {
					alert("The table is filled");
					return;
				}

				for ( ; ; value.p++) {

					if (arr[value.p]) {
						break;
					}

				}
				value.i = value.p*value.p;
	}
	return value;

}

function primeNumbersArr (length) {

	let arr = [];

	for (var i = 0; i < length; i++) {
		arr[i] = true;
	}

	for (let i = 2; i*i <= length; i++) {

		for (let j = i*i; j <= length; j += i) {
			arr[j] = false;
		}

	}

	return arr;

}
