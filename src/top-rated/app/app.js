import React from 'react'
import Movies from '../movies'
import SearchPanel from '../search-panel'

import './app.css'

export default class App extends React.Component {

    state = {
        items: [],
        initArray: []
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d75b0848ed92cb98f51d9a2312b67699&language=en-US&page=1")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.results,
                initArray: result.results
              });
            }
          )
      }


    filterList = (event) => {
        let updatedList = this.state.initArray;
        updatedList = updatedList.filter((item) => {
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }


    render () {
        const { items } = this.state
        console.log(items);
        

        return (
            <div>
                <SearchPanel filterList = {this.filterList}/>
                <Movies data = {items}/>
            </div>
        )
 
    }


}







// var FilteredList = React.createClass({
//     filterList: function(event){
//       var updatedList = this.state.initialItems;
//       updatedList = updatedList.filter(function(item){
//         return item.toLowerCase().search(
//           event.target.value.toLowerCase()) !== -1;
//       });
//       this.setState({items: updatedList});
//     },
//     getInitialState: function(){
//        return {
//          initialItems: [
//            "Apples",
//            "Broccoli",
//            "Chicken",
//            "Duck",
//            "Eggs",
//            "Fish",
//            "Granola",
//            "Hash Browns"
//          ],
//          items: []
//        }
//     },
//     componentWillMount: function(){
//       this.setState({items: this.state.initialItems})
//     },
//     render: function(){
//       return (
//         <div className="filter-list">
//           <form>
//           <fieldset className="form-group">
//           <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//           </fieldset>
//           </form>
//         <List items={this.state.items}/>
//         </div>
//       );
//     }
//   });
  
//   var List = React.createClass({
//     render: function(){
//       return (
//         <ul className="list-group">
//         {
//           this.props.items.map(function(item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//          }
//         </ul>
//       )  
//     }
//   });
  
//   React.render(<FilteredList/>, document.getElementById('app'));