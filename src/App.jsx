import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";
import { tempMovieData, tempWatchedData } from "./Data.js";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar />
      <Main movies={movies} watched={watched} />
    </>
  );
}

export default App;
