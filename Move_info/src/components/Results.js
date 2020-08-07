import React from 'react'
import Result from './Result'
function Results (props) {
    return (
        <section className="results">
            {props.results.map(result => (
                <Result key = {result.imdbID} result ={result} openPopup={props.openPopup}></Result>
            ))}
        </section>
    )
}

export default Results;