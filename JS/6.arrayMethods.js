// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

function mapFn(array, callback) {
  array = [1, 2, 3, 4, 5, 6];
  let newArr = [];

  callback = el => el * 10;

  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
    newArr.push(array[i]);
  }

  console.log(newArr);
}
mapFn();

function filterFn(array, callback) {}

function reduceFn(array, callback, initial) {}

function reduceRightFn(array, callback, initial) {}

function everyFn(array, callback) {}

function someFn(array, callback) {}

function entriesFn(array) {}
