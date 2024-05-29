// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieItem from '../components/MovieItem'


const Movie = () => {
  // cart ke sare data  slice me store hai usko  access karne ke liye useSelector hook se aate hai
  const { movie } = useSelector((state) => state);
  console.log("movie is printing");
  console.log(movie)
 
  return (
    <div >
      {
        movie.length > 0 ?
          (<div className='flex'>
            <div>
              {
                movie.map((item, index) => (
                  <MovieItem key={index} item={item} itemIndex={index} />
                ))
              }

            </div>


            <div className='ml-20'>
              <div className='font-bold text-2xl mt-10 text-green-600'>
                Your Favourite Movie
              </div>
              <div className='font-thin text-2xl mt-2'>
                Summary
              </div>
              <p className='mt-3 font-thin'><span>Total Item: {movie.length}</span></p>




            </div>

          </div>) :
          (<div className='mt-56 text-center'>
            <h1 className='font-bold text-xl text-green-800'> Yeah! Your Favourite Movie is Empty</h1>
            <Link to="/">
              <button className='border-2 border-gray-800 rounded py-2 m-2 p-2 hover:text-white hover:bg-gray-700 font-bold mt-10'>
                Add Movie
              </button>
            </Link>
          </div>)

      }




    </div>
  )
};

export default Movie;
