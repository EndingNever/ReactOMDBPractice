import React, { useState, useEffect } from 'react'
import { useContext } from 'react/cjs/react.development';
import pageContext from '../contexts/PageContext';
import "../styles/Paginator.css"
import { getMoviesBySearchTerm } from '../utility';

const calculateTotalPages = (itemCount) => {
    return Math.ceil(itemCount / 10)
};

function Paginator({ totalVideos }) {
    const { currentPage, setCurrentPage } = useContext(pageContext)

    const totalPages = Math.ceil(totalVideos / 10)
    
    return (
        <div>
            <p>Page {currentPage} of {calculateTotalPages(totalVideos)}</p>
            <div>
                <button
                disabled={currentPage == 1}
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage-1);
                        }
                        
                    }}
                >
                    &laquo;
                </button>
                <button
                    onClick={() => {
                        setCurrentPage(currentPage+1);
                    }}
                >
                    &raquo;</button>
            </div>
        </div>
    )
}

export default Paginator
