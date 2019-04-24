import React from 'react'

import './detail.css'


export default class Detail extends React.Component {

    render() {
        const item = this.props.movie
        let src = 'https://image.tmdb.org/t/p/original/' + item.poster_path
            
        
        return (
            <div className = "movie_full_detail">
                    <div className = "picture">
                         <img src={src}/>
                    </div>
                    <div className = "overview">
                        <div className = "title">
                                {item.title}
                               <span>
                                    ({item.release_date})
                                </span> 
                        </div>
                        <div className = "detail">
                                <span>Overview</span>
                                {item.overview}
                        </div>
                    </div>
            </div>
        )        
    }
}