import React from 'react'

import styled, { css } from 'styled-components'

import { useState } from 'react';
import { getMoviesBySearchTerm } from "../utility"

const Button = styled.button`
    background-color: green;
    color: white;
    font-weight: bold;
    border: 2px solid black;
    height:100px;
    border-radius: 10px;

    ${props =>
        props.primary &&
        css`
          background: tomato;
          color: white;
          border: 2px solid tomato;
        `};
    ${props =>
        props.secondary &&
        css`
          background: #ccc;
          color: palevioletred;
        `};

`
const Container = styled.div`
    border: 2px dashed black;
    background-color: gold;
`

function MovieSearch({ updateVideos, updateTotal }) {

    const [movieText, setMovieText] = useState('')
    const [movieType, setMovieType] = useState('')

    // useEffect(() => {
    //     getMoviesBySearchTerm(movieText, movieType)
    //         .then((data) => {
    //             updateVideos(data);
    //         })
    //         .finally(() => {
    //             // setIsLoading(false);
    //         });
    // }, [movieText, movieType]);

    const fetchMovies = () => {
        getMoviesBySearchTerm(movieText, movieType)
            .then((data) => {
                const [videos, total] = data;

                updateVideos(videos)
                updateTotal(total)
            })
            .finally(() => {
                // setIsLoading(false);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchMovies();
    }


    return (
    <div className="movie__search-container">
        <form
            onSubmit={handleSubmit}
            >
            <input
                type="text"
                placeholder="Enter Movie..."
                onChange={(e) => {
                    setMovieText(e.target.value)
                }}
                value={movieText}
                className="searchInput"
            />
            <select 
                className="movie__search-select"
                // style={{ 
                //     border: "2px solid red", 
                //     backgroundColor:"#ccc", 
                //     fontSize: "40px",
                //     margin: "0 10px",
                //     borderRadius: "10px"
                // }}
                onChange={(e) => {
                    setMovieType(e.target.value)
                }}
                value={movieType}
            >
                <option value="">Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                {/* <option value="episode">Episode</option> */}
            </select>
            <button type="submit">Enter</button>

            {/* <Container>
                <Button>Hello world!</Button>
                <Button primary>Hello world!</Button>
                <Button secondary>Hello world!</Button>
            </Container> */}
        </form>
    </div>
    )
}

export default MovieSearch
