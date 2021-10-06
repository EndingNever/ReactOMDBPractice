import './App.css';
import { useState, useRef } from "react";

import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Paginator from './components/Paginator'

function App() {

  const [totalVideos, setTotalVideos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);




  const handleSubmit = (e) => {
    e.preventDefault();


  }

  const [videos, setVideos] = useState([]);
  

  return (
    
    <div className="App">
      <h1>My App </h1>

      <MovieSearch 
        updateVideos={(videos)=> {
          setVideos(videos)
        }}
        updateTotal={(total)=> {
          setTotalVideos(total);
        }}
      />

        {videos && <MovieList videos={videos}/>}

      <Paginator 
        totalVideos={totalVideos}
      />
    </div>
  );
}

export default App;