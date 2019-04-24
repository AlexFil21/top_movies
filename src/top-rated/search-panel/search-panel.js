import React from 'react'
import Glass from '../img/glass.png'

import './search-panel.css'

export default class SearchPanel extends React.Component {


    render () {

        return (
        <div className = "search-movie">
            <div className="search">
                <img src = {Glass}/>
                <input 
                    className = "search-movie"
                    onChange = {(e) => this.props.filterList(e)}    
                    placeholder="Search for a movie"
                />
            </div>       
        </div>
        )
    }


}