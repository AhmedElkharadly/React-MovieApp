import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1>
        Here You Can Find Your Favorite 
        <Link to="/movies">
        Movies
        </Link>
        </h1>
    </div>
  )
}

export default Home;