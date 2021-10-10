import React, { PureComponent } from "react";
import "./banner.scss";
import { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const rquest =  await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        rquest.data.results[
          Math.floor(Math.random()*  rquest.data.results.length - 1)
        ]
      );
      return rquest;
    }
    fetchData();
  }, []);

  const truncate = (string, n) =>{
    return string?.length > n ? string.substr(0,n-1) + ' ...' : string
  }
  
  return (
    <div className="big__ban__container" 
    style= {{
      backgroundSize:"Cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center"
    }}>
      <div className="ban__container">
        <div className="ban__container__contents">
          <h1 className="banner__title">{
            movie?.title || movie?.name || movie?.original_name
          }</h1>
          <div className="ban__container__button">
            <button className="banner__btn">Play</button>
            <button className="banner__btn">My List</button>
          </div>
          <h1 className="banner__description">
          {truncate (movie?.overview,150)}</h1>
          <div className="banner--fadeBottom"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
