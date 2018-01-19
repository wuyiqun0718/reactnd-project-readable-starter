import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory, fetchCategories, fetchPosts } from '../actions';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Categories from './Categories';
import Menu from './Menu';

const _containerStyle = {
  width: '65%',
  margin: '30px auto'
}

function mapStateToProps(state) {
  return {
    selectedCategory: state.route,
    categories: state.categories,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
    return {
      selectCategory: category => dispatch(selectCategory(category)),
      fetchCategories: () => dispatch(fetchCategories()),
      fetchPosts: categories => dispatch(fetchPosts(categories))
    };
}


class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts('all');
  }
  
  render() {
    const { selectedCategory, selectCategory, categories, posts } = this.props;
    console.log(posts);
    return (
      <div className="App" style={_containerStyle}>
        <Tabs value={selectedCategory} onChange={value => selectCategory({ route: value }) }>
          <Tab label="Main Page" value="main" containerElement={<Link to="/"/> } />
          <Tab label="categories" value="categories" containerElement={<Link to="/categories"/> } />
          <Tab label="Posts" value="posts" containerElement={<Link to="/posts"/> } />
        </Tabs>

        <div style={{display: 'flex'}}>
          {/* <Switch>
          <Route path="/categories" component={Categories}/>
          <Route path="/posts" render={({ history }) => (
            <div>posts</div>
          )}/>
          <Route component={Main}/>
          </Switch> */}
          <Menu style={{width: '20%'}} categories={categories} selectCategory={category => selectCategory(category)} />
          <Main style={{width: '80%', padding: '8px'}} posts={posts.posts} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
