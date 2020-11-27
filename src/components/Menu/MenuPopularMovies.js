import React, {useContext} from 'react'
import useMenuPopularPage from '../../logic/Menu/useMenuPopularPage'
import {Context} from '../../Context'


function MenuPopularMovies() {
    
    const {menuPopularPageTile1, menuPopularPageTile2, menuPopularPageTile3, menuPopularPageTile4,menuPopularPageTile5, menuPopularPageTile6} = useMenuPopularPage()
    const {itemPageOpen}  = useContext(Context)
    
    

    return (
        <div>
        {
            itemPageOpen ? <div></div> :
       <div>
        <div className="slider-container">
                <span className="slider-label">Most Popular Movies</span>
                <div className="slider-sub-container">
                    {menuPopularPageTile1}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPageTile2}
                </div>
                </div>


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPageTile3}
                </div>
                </div>

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPageTile4}
                </div>   
                </div>
                

                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPageTile5}
                </div>  
                </div>     
            


                <div className="slider-container">
                <div className="slider-sub-container">
                    {menuPopularPageTile6}
                </div>  
                </div>
       </div>    
       
        
      
        }


        </div>
        
        
        
    )
}

export default MenuPopularMovies