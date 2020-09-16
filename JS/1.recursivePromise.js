// Treść zadania #01:
// - Stwórz funkcję tworzącą promisę o nazwie recursivePromise(arrayOfPromises), którą przyjmuję jako argument listę z promisami
// - Na potrzeby zadania zakładamy, że każdy z elementów arrayOfPromises jest promisem i elementów w arrayOfPromises jest minimum 7
// - Promisy z listy mają się wywoływać kolejna po zakończeniu poprzedniej, a ostatnia w .then ma zwrócić listę ze wszystkimi wynikami promis z arrayOfPromises zachowując odpowiednią kolejność
// - Jeśli wystąpi błąd w którejkolwiek promisie ma on zostać zwrócony do .catch wraz z poprzednimi wynikami z promis

function recursivePromise(arrayOfPromises) {
  const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000, "HelloWorld");
  });
  const promise2 = new Promise(function(resolve, reject) {
    resolve(55);
  });
  const promise3 = new Promise(function(resolve, reject) {
    resolve(2 * 10);
  });
  const promise4 = new Promise(function(resolve, reject) {
    resolve("my name is Meg");
  });
  const promise5 = new Promise(function(resolve, reject) {
    let goodDay = true;
    goodDay ? resolve("Monday") : reject("bad day");
  });
  const promise6 = Promise.resolve(11);

  arrayOfPromises = [
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
    promise6
  ];
  const promise7 = arrayOfPromises;

  Promise.all([arrayOfPromises, promise7])
    .then(console.log(promise7))
    .catch(error => console.error(error));
}

recursivePromise();
