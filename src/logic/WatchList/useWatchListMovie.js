import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useWatchListMovie() {
    const {handleMovieClick, posterPath,handleRibbonMovie, watchListMovie}  = useContext(Context)


   


    const watchListMovieTile = watchListMovie.map((movie, index) => 

       
        <div className="slider-card" key={movie.id}> 
         <span className="watchlist-ribbon">
         { watchListMovie.includes(movie) ?
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, watchListMovie)} style={{color: "#E1B517"}}></i> :
         <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonMovie(index, watchListMovie)} style={{color: ""}}></i>
       }
        </span>
        <Link to={`/moviePage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" className="slider-poster" onClick={() => handleMovieClick(index, watchListMovie)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        
        )

        return {watchListMovieTile}
}



export default useWatchListMovie