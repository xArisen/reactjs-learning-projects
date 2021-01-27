import React, { useEffect, useState } from 'react'
import axios from '../axios';

const Row = ({title, fetchUrl}) =>{
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fecthData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl]); //if [] blank we tell it to run once at start and never again, if [movies] then it runs every time movies changes

    return (
        <div>
            <h2>    
                {title}
                
            </h2>

            {/* containter -> posters */}
        </div>
    )
}

export default Row; //import default allows to renatme it (you can have only 1 default export in a file (on its end))