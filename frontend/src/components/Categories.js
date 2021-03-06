import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';


function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return {
        switchTab: route => dispatch(selectCategory(route))
    };
}

class Categories extends Component {
    componentDidMount() {
        const { switchTab, match } = this.props;
        switchTab({ route: match.path.replace('/', '')});
    }
    render() {
        return <div>
                Categories
            </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);