import React from 'react'

function Result(props) {
    return (
        <div className="result" onClick={() => props.openPopup(props.result.imdbID)}>
            <img src={props.result.Poster}></img>
            <h3>{props.result.Title}</h3>
        </div>
    )
}

export default Result
