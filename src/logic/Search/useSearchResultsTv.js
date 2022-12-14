import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useSearchResultsTv() {
    const {posterPath,handleTvClick,searchResultsTv, handleRibbonTv, watchListTv, ratingTruncate}  = useContext(Context)

    const searchResultsTvTile = searchResultsTv.map((show, index) => 
        <div className="slider-card" key={show.id}> 
          <span className="watchlist-ribbon">
            { watchListTv.includes(show) ?
            <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, searchResultsTv)} style={{color: "#E1B517"}}></i> :
            <i className="im im-bookmark im-bookmark-slider" onClick={() => handleRibbonTv(index, searchResultsTv)} style={{color: ""}}></i>
        }
          </span>
          <Link to={`/tvPage/${show.id}`}><img  src={show.poster_path !== null ? `${posterPath}${show.poster_path}` : blankSquare} alt="poster" onClick={() => handleTvClick(index, searchResultsTv, true)}/></Link>
          {ratingTruncate(show)}
          <span className="slider-title">{show.name}</span>
        </div>
        )
        return {searchResultsTvTile}
}

export default useSearchResultsTv