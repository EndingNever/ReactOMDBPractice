import './App.css';
import { useState, useEffect } from "react";

import { useFetch, useAdd } from './hooks'

import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Paginator from './components/Paginator'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes, Switch } from "react-router"
import pageContext from './contexts/PageContext';
import { useContext } from 'react';
import { getMoviesBySearchTerm } from './utility';
import { fetchMovies } from './components/MovieSearch'

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
      <Routes>
        <Route path="/Home" component={<App />} />
      </Routes>
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