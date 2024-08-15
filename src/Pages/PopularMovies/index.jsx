import React , {useState , useEffect} from 'react'
import { getPopularMovies } from '../Dashboard/services'
import Card from '../../components/Common/Card'

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])

  const getData = async () => {
    const popularMoviesData = await getPopularMovies()
    setPopularMovies(popularMoviesData.results)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='mt-4'>
      <h5 className='mx-auto text-center' style={{fontsize:'1.25rem', margin:'0 auto'}}>Popular Movies</h5>
        <div className='popularMoviesList'>
            {popularMovies?.map((item) => (
                <Card key={item?.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default PopularMovies
