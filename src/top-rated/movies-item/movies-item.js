import React from 'react'
import Detail from '../detail'
import closeBtn from '../img/icon.svg'


import './movies-item.css'

export default class MoviesItem extends React.Component {

        showDetail = (e) => {
                e.target.parentNode.nextSibling.style.display = "block" 
        }

        hideDetail = (e) => {
                e.target.parentNode.parentNode.style.display = "none"
        }


        render () {

            const movie = this.props.item
            let src = 'https://image.tmdb.org/t/p/original/' + movie.poster_path,
                bgi = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path
            
            return (
                <div className = "movie" >
                    <div className = "movie_img">
                        <img src={src}/>
                    </div> 
                    <div className = "movie_description">
                            <div className = "movie_title">
                                    {movie.title}
                            </div>

                            <div className = "movie_descr">
                                    {movie.overview}
                            </div>

                            <div className = "movie_detail" onClick = {this.showDetail}>
                                    More Info
                            </div>
                    </div>
                    
                    <div  className = "more_detail"
                          style = {{backgroundImage: `url(${bgi})`}}>
                                <Detail  movie = {movie}/>
                                <div className ="bg"></div>
                                
                                <div className = "clsBtn" onClick = {this.hideDetail}>
                                        <img src = {closeBtn} />  
                                </div>
                    </div>
                </div>
            )
        }

}