import './App.css';
import { useState, useEffect } from "react";

import {useFetch, useAdd} from './hooks'

import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Paginator from './components/Paginator'

function App() {

  const [totalVideos, setTotalVideos] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  const [loading, data] = useFetch('https://fakestoreapi.com/products/4');

  const result = useAdd(45,5)

  

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  const [videos, setVideos] = useState([]);
  

  return (
    
    <div className="App">
      <h1>My App </h1>

      <div> {loading? "loading" : data.title} </div>
      <h2>{result}</h2>

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