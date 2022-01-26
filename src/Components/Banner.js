import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from "../axios";
import requests from '../request';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    console.log(movie);
    useEffect( async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }, []);

    return (
        <header className="banner"
            style={{ backgroundSize: "100% 100%", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center" }}>
            {/* header */}
            <div className="banner_contents">
                {/* Banner content */}
                <h1 className="banner_title">{movie.name || movie.original_name}</h1>

                {/* 2 buttons */}
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                {/* bunner description */}
                    <h1 className="banner_description">{movie.overview}</h1>
                    
            </div>
            <div className="banner_fade" />
        </header>
    )
};

export default Banner;