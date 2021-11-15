import './App.css';
import { useState } from "react";

import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pageContext from './contexts/PageContext';

function App() {
  const [videos, setVideos] = useState([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieText, setMovieText] = useState('')
  const [movieType, setMovieType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <Router>
      <pageContext.Provider value={{ currentPage, setCurrentPage, movieText, setMovieText, movieType, setMovieType  }}>
        <div className="App">
          <h1 className="nav" > OMDB </h1>
          {/* {totalVideos > 0 ? <Paginator
            totalVideos={totalVideos}
            currentPage={currentPage}
          /> : <></>} */}
          <MovieSearch
            updateVideos={(videos) => {
              setVideos(videos)
            }}
            updateTotal={(total) => {
              setTotalVideos(total);
            }}
            updatePage={(page) => {
              setCurrentPage(page)
            }}
          />
          {videos && <MovieList videos={videos} />}
        </div>
      </pageContext.Provider>
    </Router>
  );
}

export default App;