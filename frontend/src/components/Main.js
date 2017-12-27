import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions';


function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return {
        switchTab: tab => dispatch(changeRoute(tab))
    };
}

class Main extends Component {
    componentDidMount() {
        const { switchTab } = this.props;
        switchTab({ route: 'main'});
    }
    render() {
        return <div>
                Hello World
            </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);