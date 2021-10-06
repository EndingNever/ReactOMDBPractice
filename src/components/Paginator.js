import React, { useState } from 'react'
import "../styles/Paginator.css"

const calculateTotalPages = (itemCount) => {
    return Math.ceil(itemCount / 10)
};

function Paginator({ totalVideos }) {
    const [page, setPage] = useState(1);
    
    const totalPages = Math.ceil(totalVideos / 10)
    
    return (
        <div>
            <p>Page {page} of {calculateTotalPages(totalVideos)}</p>
            <div>
                <button
                disabled={page == 1}
                    onClick={() => {
                        if (page > 1) {
                            setPage(page-1);
                        }
                        console.log("clicked prev")
                    }}
                >
                    &laquo;
                </button>
                <button
                    onClick={() => {
                        setPage(page+1);
                    }}
                >
                    &raquo;</button>
            </div>
        </div>
    )
}

export default Paginator
