// Movie class represents a movie object
class Movie {
  constructor(title, genre, director, releaseYear) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.isAvailable = true;
  }
}

// MovieStore class represents the movie store and its functionality
class MovieStore {
  constructor() {
    this.movies = [];
    this.rentedMovies = [];
  }

  // Method to add a new movie to the store
  addMovie(title, genre, director, releaseYear) {
    const movie = new Movie(title, genre, director, releaseYear);
    this.movies.push(movie);
  }

  // Method to rent a movie
  rentMovie(title) {
    const movieIndex = this.movies.findIndex((movie) => movie.title === title);
    if (movieIndex !== -1 && this.movies[movieIndex].isAvailable) {
      this.movies[movieIndex].isAvailable = false;
      this.rentedMovies.push(this.movies[movieIndex]);
      console.log(`${title} has been rented successfully.`);
    } else {
      console.log(`${title} is not available for renting.`);
    }
  }

  // Method to return a rented movie
  returnMovie(title) {
    const rentedMovieIndex = this.rentedMovies.findIndex(
      (movie) => movie.title === title
    );
    if (rentedMovieIndex !== -1) {
      this.rentedMovies[rentedMovieIndex].isAvailable = true;
      this.rentedMovies.splice(rentedMovieIndex, 1);
      console.log(`${title} has been returned successfully.`);
    } else {
      console.log(`${title} is not a rented movie.`);
    }
  }

  // Method to display all available movies
  displayAvailableMovies() {
    console.log("Available Movies:");
    this.movies.forEach((movie) => {
      if (movie.isAvailable) {
        console.log(
          `${movie.title} - ${movie.genre} - ${movie.director} - ${movie.releaseYear}`
        );
      }
    });
  }

  // Method to display all rented movies
  displayRentedMovies() {
    console.log("Rented Movies:");
    this.rentedMovies.forEach((movie) => {
      console.log(
        `${movie.title} - ${movie.genre} - ${movie.director} - ${movie.releaseYear}`
      );
    });
  }
}

// Example usage
const movieStore = new MovieStore();

// Adding Nigerian movies to the store
movieStore.addMovie("King of Boys", "Drama", "Kemi Adetiba", 2018);
movieStore.addMovie("The Wedding Party", "Romance", "Kemi Adetiba", 2016);
movieStore.addMovie(
  "Living in Bondage: Breaking Free",
  "Drama",
  "Ramsey Nouah",
  2019
);

// Display available movies
movieStore.displayAvailableMovies();

// Renting a movie
movieStore.rentMovie("King of Boys");
movieStore.rentMovie("The Wedding Party");

// Display rented movies
movieStore.displayRentedMovies();

// Return a rented movie
movieStore.returnMovie("King of Boys");

// Display available movies after returning
movieStore.displayAvailableMovies();
