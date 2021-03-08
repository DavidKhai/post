import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../Components/Home';
import PostDetail from '../Components/PostDetail';
import LogInOut from '../Components/LogInOut';

class DirectionURL extends Component {
    render() {
        return (
            <div>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/" component={() => (<Home sortPoint={this.props.sortPoint}  searchData={this.props.searchData} />)}/>
                <Route exact path="/post-detail/:slug.:id.html" component={PostDetail} />
                <Route exact path="/login" component={LogInOut} />
            </div>
        );
    }
}

export default DirectionURL;