import React from 'react'
import MoviesItem from '../movies-item'

import './movies.css'

const  Movies = ({data}) => {

    const bd = data
    
    const elements = bd.map((item) => {
            return <div className = "movies_list_items"> <MoviesItem item = {item}/> </div>
        })
        
    return (
        <div className = "movies_list">
                <div className ="tr"> Top Rated Movies</div>
                {elements}
        </div>
    )
    
}


export default Movies