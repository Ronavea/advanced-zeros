module.exports = function getZerosCount(number, base) {
  let arr = [];
//нахожу все возможные простые числа входящие в base
  nextPrime:
    for(let i = 2; i <= base; i++) {
	  for(let j = 2; j < i; j++) {
	    if(i % j == 0) continue nextPrime;
	  }
	  arr.push(i);
	}

//нахожу простые числа которые входят в base
  array = [];
  for(let i = 0; i < arr.length; i++) {
    if(base % arr[i] == 0) {
	  array.push(arr[i]);
	}
  }

//считаю сколько раз входит простое число в base
  let quantity = [];
  let count = 0;
  let baseCopy = base;

  for(let i = 0; i < array.length; i++) {
    while(baseCopy % array[i] == 0) {
	  baseCopy = baseCopy / array[i];
	  count++;
	}
	quantity.push(count);
	count = 0;
  }

//нахожу возможные числа
  let mas = [];
  let result = 0;
  let clone = number;

  for(let i = 0; i < array.length; i++) {
    while(clone >= 1) {
	  result += Math.floor(clone/array[i]);
	  clone = Math.floor(clone/array[i]);
	}
	mas.push(result);
	result = 0;
	clone = number;
  }

//сокращаю числа, которые повторялись
  for(let i = 0; i < array.length; i++) {
    mas[i] = Math.floor(mas[i]/quantity[i]);
  }

//нахожу наимешьнее число
  result = mas[0];
  for(let i = 1; i < mas.length; i++) {
    if(result > mas[i]) {
	  result = mas[i];
	}
  }
  return result;
}