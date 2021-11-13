import React from 'react'

import styled, { css } from 'styled-components'

import { useState } from 'react';
import { getMoviesBySearchTerm } from "../utility"
import { useContext } from 'react/cjs/react.development';
import pageContext from '../contexts/PageContext';

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

     const { currentPage, movieText, setMovieText, movieType, setMovieType } = useContext(pageContext)

     const fetchMovies = ()=>{
         getMoviesBySearchTerm(movieText, movieType, currentPage).then((data)=>{
             const [videos, total] = data;
             updateVideos(videos);
             updateTotal(total);
         }).finally()
     }

    //  const fetchMovies = () => {
    //     getMoviesBySearchTerm(movieText, movieType, currentPage)
    //         .then((data) => {
    //             const [videos, total] = data;
    //             updateVideos(videos);
    //             updateTotal(total);
    //         })
    //         .finally(() => {
    //             // updatePage(currentPage)
    //         });
    // }

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
                    onChange={(e) => {
                        setMovieType(e.target.value)
                    }}
                    value={movieType}
                >
                    <option value="">All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>

                </select>
                <button type="submit" className="button">Enter</button>
            </form>
        </div>
    )
}


export default MovieSearch



export const testExport2 = ()=>{
    console.log('testexport2');
}
