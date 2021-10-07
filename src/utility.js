// Write an arrow function called getMoviesBySearchTerm that takes a search string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.

// API Key http://www.omdbapi.com/?i=tt3896198&apikey=e54dfc28


const OMDB_API_KEY = "e54dfc28";
const baseURL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;


const getMoviesBySearchTerm = async (searchTerm, type) => {
    let searchTermURL = `${baseURL}s=${searchTerm}`;
    if(type) {
        searchTermURL += `&type=${type}`
    }

    const response = await fetch(searchTermURL)
    const data = await response.json();

    if(data.Response === "True") {
        return [data.Search, data.totalResults];
    }
    
    return [];
};

// Waiting for a response from the server, because we need an async/await
// getMoviesBySearchTerm("Batman").then((movies) => {
//     console.log('Movies Found', movies)
// }).catch((err) => {
//     console.error("whoops no movies")
// });

// Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie.

   const getMovieDetailsById = async (movieId) => {
    
    const movieIdURL = `${baseURL}i=${movieId}`;
    const response = await fetch(movieIdURL)
    const data = await response.json();

    // console.log(data);

    if(data.Response === "False") { 
        throw new Error();
    }

    return data
};

// console.log(getMovieDetailsById("tt0372784"))

export { getMovieDetailsById }
export { getMoviesBySearchTerm }
// getMovieDetailsById("tt0372784");
 
