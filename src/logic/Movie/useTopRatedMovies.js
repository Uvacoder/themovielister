import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useTopRatedMovies() {
    const {topRatedMovies, posterPath,setItemPageOpen, setMovieId, fetchMovieDetails, setMediaType, fetchMovieCredits, setMovieCredits, fetchMovieRecommend, fetchMovieSimilar, fetchMovieReviews, fetchMovieVideos}  = useContext(Context)

    function handleMovieTopRatedClick(e) {
        let selection = topRatedMovies[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        fetchMovieRecommend(selection)
        fetchMovieSimilar(selection)
        fetchMovieReviews(selection)
        fetchMovieVideos(selection)
        setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
        
    }
 
    const topRatedMoviesTile = topRatedMovies.map((movie, index) => 
        
        
        <div className="slider-card" key={movie.id}> 
        <Link to={`/itemPage/${movie.id}`}><img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}` : blankSquare} alt="poster" onClick={() => handleMovieTopRatedClick(index)}/></Link>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {topRatedMoviesTile}
}


export default useTopRatedMovies