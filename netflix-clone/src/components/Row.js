import React, { useEffect, useState } from 'react'
import axios from '../axios';
import '../style/Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) =>{
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); //if [] blank we tell it to run once at start and never again, if [movies] then it runs every time movies changes

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {/* several row_posters */}

            {movies.map((movie) => {
                return <img key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
            })}

            </div>
        </div>
    )
}

export default Row; //import default allows to renatme it (you can have only 1 default export in a file (on its end))