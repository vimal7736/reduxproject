import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movies/movieSlice'
import Card from '../components/Card'

const MovieList = () => {
  const [selectedType, setSelectedType] = useState('movies');
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  const handleToggle = (type) => {
    setSelectedType(type);
  }
  const renderCard = (items) => {
    return items && items.Search ? (
      items.Search.map((item, index) => (
        <div key={index}>
          <Card
            Title={item.Title}
            Type={item.Type}
            Year={item.Year}
            Poster={item.Poster}
            imdbID={item.imdbID}
          />
        </div>
      ))
    ) : (
      <div   >
        <div >
          Items not found
        </div>

      </div>
    )
  }

  return (
    <div >
      <div  >
        <div >
          <button onClick={() => handleToggle('movies')}>
            Movies
          </button>
          <button onClick={() => handleToggle('shows')}>
            Shows
          </button>
        </div>
        <div className='listt'>
          {selectedType === 'movies' && renderCard(movies)}
          {selectedType === 'shows' && renderCard(shows)}
        </div>
      </div>
    </div>
  )
}

export default MovieList
