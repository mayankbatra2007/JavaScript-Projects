// movie array -> WatchList
const movies = [
    "Avengers",
    "Interstellar",
    "Inception",
    "3 Idiots",
    "The Dark Knight"
];

// display watchlist
console.log("========== MY MOVIE WATCHLIST ==========");

console.log("1. " + movies[0]);
console.log("2. " + movies[1]);
console.log("3. " + movies[2]);
console.log("4. " + movies[3]);
console.log("5. " + movies[4]);

// toatal movies
// Step 3: Display total movies
console.log("---------------------------------------");
console.log("Total Movies: " + movies.length);
console.log("=======================================");

// case sensitive searching
const searchedMovie = prompt("Enter movie name to search: ");
console.log("Searching for: "+ searchedMovie);

// clean the input
const cleanMovie = searchedMovie.trim().toLowerCase();
console.log("Cleaned Movie Name:", cleanMovie);

// search inside the array
let movieExists = false;
for (const movie of movies) {
  if (movie.toLowerCase() === cleanMovie) {
    movieExists = true;
    break; // stop searching once found
  }
}


// display result
if(movieExists){
    console.log(`Movie found! ${searchedMovie.trim()} is in your watchlist`);
}
else{
    console.log(`Sorry! ${searchedMovie.trim()} is not in your watchlist.`);
}

// add movie to ur watchlist
const newMovie = prompt("Enter movie name to add:");
const cleanedNewMovie = newMovie.trim();

// check empty input or duplicates
if(cleanedNewMovie === ""){
    console.log("Movie name cannot be empty");
}
else if(movies.some(movie =>
        movie.toLowerCase() === cleanedNewMovie.toLowerCase()
    )){
        console.log("Movie already exists in your watchlist!");
}
else{
    movies.push(cleanedNewMovie);
    console.log(`${cleanedNewMovie} added successfully!`);
}

// display updated list
console.log("\n========== UPDATED WATCHLIST ==========");

movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
});

console.log("---------------------------------------");

console.log("Total Movies:", movies.length);

console.log("=======================================");

// remove movie

// Step 5: Remove a Movie

const removeMovie = prompt("Enter movie name to remove:");

const cleanedRemoveMovie = removeMovie.trim().toLowerCase();

const movieIndex = movies.findIndex(
    movie => movie.toLowerCase() === cleanedRemoveMovie
);

if (cleanedRemoveMovie === "") {
    console.log("Movie name cannot be empty!");
}
else if (movieIndex !== -1) {
    const removedMovie = movies.splice(movieIndex, 1);
    console.log(`${removedMovie[0]} removed successfully!`);
}
else {
    console.log("Movie not found in your watchlist!");
}

// Display updated watchlist

console.log("\n========== UPDATED WATCHLIST ==========");

movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
});
console.log("---------------------------------------");
console.log("Total Movies:", movies.length);
console.log("=======================================");