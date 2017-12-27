import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Categories from './Categories';


function mapStateToProps(state) {
  return {
    selectedTab: state.route
  };
}

function mapDispatchToProps(dispatch) {
    return {
      switchTab: tab => dispatch(changeRoute(tab))
    };
}


class App extends Component {
  render() {
    const { selectedTab, switchTab } = this.props;
    return (
      <div className="App">
        <Tabs value={selectedTab} onChange={value => switchTab({ route: value }) }>
          <Tab label="Main Page" value="main" containerElement={<Link to="/"/> } />
          <Tab label="categories" value="categories" containerElement={<Link to="/categories"/> } />
          <Tab label="Posts" value="posts" containerElement={<Link to="/posts"/> } />
        </Tabs>

        <div>
          <Switch>
          <Route path="/categories" component={Categories}/>
          <Route path="/posts" render={({ history }) => (
            <div>posts</div>
          )}/>
          <Route component={Main}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
