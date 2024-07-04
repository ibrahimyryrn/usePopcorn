import axios from "axios";
import { useEffect, useState } from "react";

const KEY = "9792b08d";

function MovieDetails({ selectedId, setSelectedId, setWatched }) {
  const [movie, setMovie] = useState({});

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleCloseMovie() {
    setSelectedId(null);
  }

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      setMovie(response.data);
    };
    getMovieDetails();
  }, [selectedId]);

  function handleAddWatchedList(movie) {
    setWatched((watched) => {
      // Filmin watched listesinde olup olmadığını kontrol ediyoruz
      const isAlreadyWatched = watched.some(
        (watchedMovie) => watchedMovie.imdbID === movie.imdbID
      );

      // Eğer film listede yoksa ekliyoruz
      if (!isAlreadyWatched) {
        return [
          ...watched,
          {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            runtime: parseInt(movie.Runtime, 10),
            imdbRating: parseInt(movie.imdbRating, 10),
          },
        ];
      }

      // Film zaten listede ise mevcut listeyi geri döndürüyoruz
      return watched;
    });
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={handleCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt="" />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDb
          </p>
        </div>
      </header>

      <section>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Director by {director}</p>
        <button className="btn-add" onClick={() => handleAddWatchedList(movie)}>
          Add to watched list
        </button>
      </section>
    </div>
  );
}

export default MovieDetails;
