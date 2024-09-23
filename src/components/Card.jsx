import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ Title, Type, Year, Poster, imdbID }) => {
  return (
    <div className='mainCard'>
        <div className="card">
      <Link to={`/movie/${imdbID}`} className="card-link" title="Click here for details">
          <img src={Poster} alt={Title} className="card-image" />
      </Link>
          <div className="card-content">
            <h3 className="card-title">{Title}</h3>
            <p className="card-year">Year: {Year}</p>
            <p className="card-type">Type: {Type}</p>
            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer" className="card-link">
              View on IMDb
            </a>
          </div>
        </div>
    </div>
  );
};

export default Card;
