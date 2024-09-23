import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMoviesorShowDetail, getSelectedMovieorShow } from '../features/movies/movieSlice';

function MovieDeatils() {
  const { imbdID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieorShow);

  useEffect(() => {
    dispatch(fetchAsyncMoviesorShowDetail(imbdID));
  }, [dispatch, imbdID]);

  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    // backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '2rem auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    margin: '1rem 0',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#f4f4f4',
    marginBottom: '0.5rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#f4f4f4'
  };

  const strongStyle = {
    fontWeight: 'bold',
    color: '#007bff',
  };

  return (
    <div style={containerStyle}>
      {data ? (
        <div>
          <h2 style={titleStyle}>{data.Title}</h2>
          <p style={textStyle}>{data.Plot}</p>
          <img src={data.Poster} alt={data.Title} style={imageStyle} />
          <p style={textStyle}>
            <strong style={strongStyle}>Director:</strong> {data.Director}
          </p>
          <p style={textStyle}>
            <strong style={strongStyle}>Actors:</strong> {data.Actors}
          </p>
          <p style={textStyle}>
            <strong style={strongStyle}>Released:</strong> {data.Released}
          </p>
          <p style={textStyle}>
            <strong style={strongStyle}>Rating:</strong> {data.imdbRating}
          </p>
        </div>
      ) : (
        <div style={textStyle}>Loading...</div>
      )}
    </div>
  );
}

export default MovieDeatils;
