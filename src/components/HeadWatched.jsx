const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function HeadWatched({ watched, isOpen2, setSelectedId, setWatched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const sumTime = sum(watched.map((movie) => movie.runtime));

  function handleSelectedMovie(id) {
    setSelectedId(id);
  }

  function handleDeleteMovieWatchedList(id, event) {
    event.stopPropagation();
    setWatched(watched.filter((watched) => watched.imdbID !== id));
  }

  return (
    <>
      {isOpen2 && (
        <>
          <div className="summary">
            <h2>MOVIES YOU WATCHED</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐</span>
                <span>{avgImdbRating.toFixed(1)}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{sumTime} min</span>
              </p>
            </div>
          </div>

          <ul className="list list-movies">
            {watched?.map((movie) => (
              <li
                key={movie.imdbID}
                onClick={() => handleSelectedMovie(movie.imdbID)}
              >
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min </span>
                  </p>
                  <button
                    className="btn-delete"
                    onClick={(event) =>
                      handleDeleteMovieWatchedList(movie.imdbID, event)
                    }
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default HeadWatched;
