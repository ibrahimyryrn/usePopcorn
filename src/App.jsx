import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";
import { tempMovieData, tempWatchedData } from "./Data.js";
import { useEffect, useState } from "react";
import HeadMovies from "./components/HeadMovies.jsx";
import HeadWatched from "./components/HeadWatched.jsx";
import axios from "axios";
import MovieDetails from "./components/MovieDetails.jsx";

const KEY = "9792b08d";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen2, setIsOpen2] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setError("Movie not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setIsLoading(false);
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery}>
        <p className="num-results">Found {movies.length} results</p>
      </Navbar>
      <Main>
        <div className="box">
          {isLoading && <p className="loader">Loading...</p>}
          {!isLoading && !error && (
            <HeadMovies movies={movies} setSelectedId={setSelectedId} />
          )}
          {error && <p className="error">⛔ {error}</p>}
        </div>
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "-" : "+"}
          </button>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              setWatched={setWatched}
            />
          ) : (
            <HeadWatched
              watched={watched}
              isOpen2={isOpen2}
              setSelectedId={setSelectedId}
              setWatched={setWatched}
            />
          )}
        </div>
      </Main>
    </>
  );
}

export default App;
