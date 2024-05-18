import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";
import { tempMovieData, tempWatchedData } from "./Data.js";
import { useState } from "react";
import HeadMovies from "./components/HeadMovies.jsx";
import HeadWatched from "./components/HeadWatched.jsx";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar>
        <p className="num-results">Found {movies.length} results</p>
      </Navbar>
      <Main>
        <HeadMovies movies={movies} />
        <HeadWatched watched={watched} />
      </Main>
    </>
  );
}

export default App;
