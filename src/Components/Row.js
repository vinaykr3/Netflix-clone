import React, {useEffect, useState} from 'react';
import axios from '../axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({text, fetchUrl, isLargeRow}) => {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results);
            return request;  
        }fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(error => console.log(error))
        }
    };

  return <>
        
        <div className='row'>
        <h3 className='heading'>{text}</h3>
            <div className="row_posters">
            {
            movie.map((movie) => {
                return (
                <img key={movie.id} onClick={()=> handleClick(movie)} className={`row_poster && ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow? movie.poster_path : movie?.backdrop_path}`} alt={movie.name} />
                )
            })
        }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>

  </>;
};

export default Row;
