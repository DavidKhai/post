import React, { Component } from 'react';
import '.././App.css';
import Nav from './Nav';
import {
  BrowserRouter as Router
} from "react-router-dom";
import DirectionURL from '../Router/DirectionURL';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchTextApp: '',
      sortObjectPoint:''
    }
  }
  getSearchText = (searchText) => {
    this.setState({
      searchTextApp: searchText
    });
  }

  getSortPoint = (sortObjPoint) => {
    this.setState({
      sortObjectPoint: sortObjPoint
    });
  }
  
  render() {
    return (
      <Router>
        <div>
          <Nav 
              getSearchText={(searchText)=>this.getSearchText(searchText)}
              getSortPoint={(sortObjPoint)=>this.getSortPoint(sortObjPoint)}/>
          <DirectionURL searchData={this.state.searchTextApp}
                        sortPoint={this.state.sortObjectPoint}/>
        </div>
      </Router>
    );
  }
}

export default App;