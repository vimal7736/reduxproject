import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'
import MovieList from './MovieList'
import SearchBar from '../components/SearchBar'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies("Bean"));
        dispatch(fetchAsyncShows("Friends"));
    }, [dispatch])

    return (
        <div className="home-container">
            <div >
                <SearchBar />
            </div>
            <MovieList />
        </div>
    )
}

export default Home;
