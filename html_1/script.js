function main () {

	let number;

	do {
		number = prompt('Input number(max 100)', 100);
	} while ( number > 100 || number < 0 );

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

	let p = 2, i = p*p, j = 2, arr = primeNumbersArr(number), arr_help = [];

	for (var m = 0; m < number; m++) {
		arr_help[m] = false;
	}

	setTimeout(function paintTD() {
		
		if (!arr_help[i]) {
			let element = document.querySelectorAll('td')[i - 1];
			element.style.background = 'red';
			arr_help[i] = true;
			
			i += p;
			
			if (i > number) {

				p++;

				if (p*p > number) {
					alert("The table is filled");
					return;
				}

				for ( ; ; p++) {
					if (arr[p]) {
						break;
					}
				}
				i = p*p;
			}

			setTimeout(paintTD, 200);
		}
		else {
			i += p;
			
			if (i > number) {

				p++;

				if (p*p > number) {
					alert("The table is filled");
					return;
				}

				for ( ; ; p++) {
					if (arr[p]) {
						break;
					}
				}
				i = p*p;
			}

			setTimeout(paintTD, 0);
		}
			
	}, 1000);
		
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
