import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    _changeData() {
        console.log('event called');
    }
    render() {
        return (
            <div>
                <h1>Hello World {this.props.currentUserName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        currentUserName: state.reducer.username
    }
}
export default connect(mapStateToProps, null)(Home);













































