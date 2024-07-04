import { useState } from "react";

function HeadMovies({ movies, setSelectedId }) {
  const [isOpen1, setIsOpen1] = useState(true);

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && (
        <>
          <ul className="list list-movies">
            {movies?.map((movie) => (
              <li
                key={movie.imdbID}
                onClick={() => handleSelectedMovie(movie.imdbID)}
              >
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div style={{ justifyContent: "space-between", margin: "5px" }}>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default HeadMovies;
