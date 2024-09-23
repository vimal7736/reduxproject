import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const SearchBar = () => {
    const [searchTerm ,setSearchTerm] =useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm === '') return;
        dispatch(fetchAsyncMovies(searchTerm));
        dispatch(fetchAsyncShows(searchTerm));
        // setSearchTerm('')
    }

  return (
    <div className='searchh' >
      <form  action="" onSubmit={handleSearch}>
        <input 

        type="text"
        placeholder='search for movies or shows'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button 
        style={{height:'45px'}}
        type='submit'
        >
        <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
