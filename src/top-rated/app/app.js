import React from 'react'
import Movies from '../movies'
import { connect } from "react-redux"
import { moviesUpdate, moviesFilter } from '../../actions'
import SearchPanel from '../search-panel'

import './app.css'

class App extends React.Component {

    state = {
        filteStr: ''
    }
    
    componentDidMount() {
       fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d75b0848ed92cb98f51d9a2312b67699&language=en-US&page=1")
                     .then(res => res.json())
                     .then(
                        (result) => {
                        this.props.moviesUpdate(result.results)
                      }
                    )
      }


    filterList = (event) => {
        this.setState({filteStr: event.target.value})
    }

    updateMoviesList (arr, filteStr ) {
        return arr.filter(item => 
                        item.title.toLowerCase()
                        .includes(filteStr.toLowerCase())
                    )
    }


    render () {
        const { filteStr } = this.state
        const newMoviesArray = this.updateMoviesList(this.props.movies, filteStr )

        return (
            <div>
                <SearchPanel filterList = {this.filterList}/>
                <Movies data = {newMoviesArray}/>
            </div>
        )
 
    }
}

function mapStateToProps ({ movies }) {
    return {
        movies
    }
}

const mapDispatchToProps = {
    moviesUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




