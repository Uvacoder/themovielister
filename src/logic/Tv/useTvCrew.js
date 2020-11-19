import React, {useContext} from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'

function useTVCrew() {

    const {tvCredits, setMediaType, setPersonId, fetchPersonCredits, fetchPersonDetails, posterPath,fetchPersonImages}  = useContext(Context)
    const {crew} = tvCredits

   


    let directorArr = [], writingArr = [], productionArr = [], otherJobArr = []

    

    
    if (crew !== undefined) {
        for (let i = 0; i < crew.length; i++) {
            // console.log(crew[i].department)
            if (crew[i].department === "Directing") {
                directorArr.push(crew[i])
                
            } else if (crew[i].department === "Writing") {
                writingArr.push(crew[i])
            } else if (crew[i].department === "Production") {
                productionArr.push(crew[i])
            } else {
                otherJobArr.push(crew[i])
            }
    }
    }

    let crewSortedArr = [...directorArr, ...writingArr, ...productionArr, ...otherJobArr]


    
    


    function handleCrewCreditClick(e) {
        let selection = crewSortedArr[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        // setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }


    const crewTvTile = crewSortedArr && crewSortedArr.map((person, index) => 

         
        <div className="slider-card" key={person.credit_id}> 
        <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handleCrewCreditClick(index)}/>
        <span className="slider-name">{person.name}</span>
        <span className="slider-character">{person.job}</span>
       </div> 
        )

    
    
    return {crewTvTile}
}

export default useTVCrew