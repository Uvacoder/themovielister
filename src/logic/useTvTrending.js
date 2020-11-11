import { useContext } from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useTvTrending() {
    const {tvTrending, posterPath, setItemPageOpen, setTvId, fetchTvDetails, setMediaType, fetchTvCredits}  = useContext(Context)

    function handleTvTrendingClick(e) {
        let selection = tvTrending[e].id
        setMediaType('tv')
        setTvId(selection)
        fetchTvDetails(selection)
        fetchTvCredits(selection)
        setItemPageOpen(prevState => !prevState)
    }
 
    const tvTrendingTile = tvTrending.map((show, index) => 
        
        <div className="slider-card" key={show.id}> 
        <img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvTrendingClick(index)}/>
        <span className="slider-score"><i className="im im-star"></i>{show.vote_average}</span>
        <span className="slider-title">{show.name}</span>
        </div>
        )

        return {tvTrendingTile}
}


export default useTvTrending