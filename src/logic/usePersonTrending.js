import { useContext } from 'react'
import {Context} from '../Context'

function usePersonTrending() {
    const {personTrending, posterPath, setItemBoxOpen}  = useContext(Context)

    function handlePersonTrendingClick(e) {
        let selection = personTrending[e].id
        console.log(selection)
        setItemBoxOpen(prevState => !prevState)
    }
 
    const personTrendingTile = personTrending.map((person, index) => 
        
        
        <div className="slider-card" key={person.id}> 
        <img  src={`${posterPath}${person.profile_path}`} alt="poster" onClick={() => handlePersonTrendingClick(index)}/>
        <span className="slider-name">{person.name}</span>
        </div>
        )

        return {personTrendingTile}
}


export default usePersonTrending