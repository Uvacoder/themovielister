import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useMoviePopular() {
    const {posterPath, popularMovies, setItemPageOpen, setMovieId, fetchMovieDetails, setMediaType, fetchMovieCredits}  = useContext(Context)


    function handleMoviePopularClick(e) {
        let selection = popularMovies[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        fetchMovieCredits(selection)
        setItemPageOpen(prevState => !prevState)
        
    }

    const popularMoviesTile = popularMovies.map((movie, index) => 
        
        <div className="slider-card" key={movie.id}> 
        <img  src={movie.poster_path !== null ? `${posterPath}${movie.poster_path}`: blankSquare} alt="poster" onClick={() => handleMoviePopularClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{movie.vote_average}</span>
        <span className="slider-title">{movie.title}</span>
        </div>
        )

        return {popularMoviesTile}
}



export default useMoviePopular