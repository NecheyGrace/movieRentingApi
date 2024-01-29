# Movie Rental API

The following is a simple implementation of a movie renting API using ES6 JavaScript Classes and Objects/Functions where necessary.

## Movie Class

The `Movie` class represents a movie object with various properties such as title, genre, director, release year, and availability status.

```javascript
class Movie {
    constructor(title, genre, director, releaseYear) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.releaseYear = releaseYear;
        this.isAvailable = true; // Initially, all movies are available
    }
}

```
##  MovieStore Class
The MovieStore class represents the movie store and its functionality including adding movies, renting movies, returning movies, and displaying available/rented movies.

```
class MovieStore {
    constructor() {
        this.movies = []; // Array to store available movies
        this.rentedMovies = []; // Array to store rented movies
    }

    addMovie(title, genre, director, releaseYear) {
        const movie = new Movie(title, genre, director, releaseYear);
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movieIndex = this.movies.findIndex(movie => movie.title === title);
        if (movieIndex !== -1 && this.movies[movieIndex].isAvailable) {
            this.movies[movieIndex].isAvailable = false;
            this.rentedMovies.push(this.movies[movieIndex]);
            console.log(`${title} has been rented successfully.`);
        } else {
            console.log(`${title} is not available for renting.`);
        }
    }

    returnMovie(title) {
        const rentedMovieIndex = this.rentedMovies.findIndex(movie => movie.title === title);
        if (rentedMovieIndex !== -1) {
            this.rentedMovies[rentedMovieIndex].isAvailable = true;
            this.rentedMovies.splice(rentedMovieIndex, 1);
            console.log(`${title} has been returned successfully.`);
        } else {
            console.log(`${title} is not a rented movie.`);
        }
    }

    displayAvailableMovies() {
        console.log("Available Movies:");
        this.movies.forEach(movie => {
            if (movie.isAvailable) {
                console.log(`${movie.title} - ${movie.genre} - ${movie.director} - ${movie.releaseYear}`);
            }
        });
    }

    displayRentedMovies() {
        console.log("Rented Movies:");
        this.rentedMovies.forEach(movie => {
            console.log(`${movie.title} - ${movie.genre} - ${movie.director} - ${movie.releaseYear}`);
        });
    }
}
```
##  Example Usage
Here's how you can use the movie rental API:
```
// Example usage
const movieStore = new MovieStore();

// Adding movies to the store
movieStore.addMovie("The Shawshank Redemption", "Drama", "Frank Darabont", 1994);
movieStore.addMovie("The Godfather", "Crime", "Francis Ford Coppola", 1972);
movieStore.addMovie("The Dark Knight", "Action", "Christopher Nolan", 2008);

// Display available movies
movieStore.displayAvailableMovies();

// Renting a movie
movieStore.rentMovie("The Godfather");
movieStore.rentMovie("The Dark Knight");

// Display rented movies
movieStore.displayRentedMovies();

// Return a rented movie
movieStore.returnMovie("The Godfather");

// Display available movies after returning
movieStore.displayAvailableMovies();
```
This code sets up a basic movie renting system where you can add movies to the store, rent movies, return movies, and display available and rented movies.

**Author: Amara Metu**
