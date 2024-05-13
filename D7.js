/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("ESERCIZIO 1");

const str1 = "Stringa1";
const str2 = "Stringa2";

const stringTrimmer = function (stringa1, stringa2) {
  const firstPart = stringa1.substr(0, 2);
  const lastPart = stringa2.substr(-3);
  const complete = firstPart.concat(lastPart).toUpperCase();
  console.log(complete);
};

stringTrimmer(str1, str2);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("ESERCIZIO 2");

const tenRandomNumbers = function () {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

console.log(tenRandomNumbers());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log("ESERCIZIO 3");

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numArray.filter((number) => number % 2 === 0);

console.log(evens);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("ESERCIZIO 4");

const somma = function (array) {
  let actualSum = 0;
  array.forEach((number) => (actualSum += number));
  return actualSum;
};

console.log(somma(numArray));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("ESERCIZIO 5");

const sommaReduce = function (array) {
  const sum = array.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0 //Questo è il fallback per il primo ciclo
  );
  return sum;
};

console.log(sommaReduce(numArray));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("ESERCIZIO 6");

const sumToArray = function (array, n) {
  const summedArray = array.map((number) => number + n);
  return summedArray;
};

console.log(sumToArray(numArray, 1));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("ESERCIZIO 7");

const strArray = ["EPICODE", "IS", "GREAT!"];

const countStrings = function (array) {
  const countedStrings = array.map((string) => {
    return string.length;
  });
  return countedStrings;
};

console.log(countStrings(strArray));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("ESERCIZIO 8");

const allOdds = function () {
  let count = 0;
  const from1To99 = [];
  const odds = [];
  for (let i = 0; i < 99; i++) {
    count++;
    from1To99.push(count);
  }
  from1To99.filter((number) => number % 2 > 0).forEach((n) => odds.push(n));
  return odds;
};

console.log(allOdds());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("ESERCIZIO 9");

const oldestMovie = function (array) {
  const newMovies = [...array];
  const oldestMovies = [];
  let year = 3000;
  newMovies.forEach(function (movie) {
    movie.Year = Number(movie.Year);
  });
  newMovies.forEach(function (movie) {
    if (movie.Year < year) {
      year = movie.Year;
      oldestMovies.pop();
      oldestMovies.push(movie);
    }
  });
  return oldestMovie[0];
};

console.log(oldestMovie(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("ESERCIZIO 10");

const countElements = function (array) {
  let count = 0;
  array.map(() => count++);
  return count;
};

console.log(countElements(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("ESERCIZIO 11");

const getTitles = function (array) {
  const titles = array.map((movie) => {
    return movie.Title;
  });
  return titles;
};

console.log(getTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* console.log("ESERCIZIO 12");

const getRecent = function (array) {
  const newMovies = [...movies];
  const recent = newMovies
    .forEach(function (movie) {
      movie.Year = Number(movie.Year);
    })
    .filter(function (movie) {
      return movie.Year >= 2000;
    });
  return recent;
};

console.log(getRecent(movies));
 */
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("ESERCIZIO 13");

const yearSum = function (array) {
  const years = array.map((movie) => {
    return movie.Year;
  });
  const sumOfYears = years.reduce(
    (accumulator, initialValue) => accumulator + initialValue,
    0
  );
  return sumOfYears;
};

console.log(yearSum(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log("ESERCIZIO 14");

const getMovie = function (array, id) {
  const searchedMovie = array.filter((movie) => movie.imdbID === id);
  return searchedMovie;
};

console.log(getMovie(movies, "tt0057261"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
