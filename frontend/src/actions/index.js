export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

const _authHeader = { 
    headers: { Authorization: 'whatever' } 
};

export function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    }
}

export function requestPosts(category) {
    return {
        type: REQUEST_POSTS,
        category
    }
}

export function receivePosts(category, posts) {
    return {
        type: RECEIVE_POSTS,
        receivedAt: Date.now(),
        category,
        posts
    }
}

export function setCategories({ categories }) {
    return {
        type: SET_CATEGORIES,
        categories: categories.map( ({name}) => name)
    }
}

export const fetchPosts = category => dispatch => {
    dispatch(requestPosts(category));
    const url = category === 'all' ? 'http://localhost:3001/posts' : `http://localhost:3001/${category}/posts`;
    return fetch(url, _authHeader)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(category, json)))
}

export const fetchCategories = () => dispatch => {
    return fetch('http://localhost:3001/categories', _authHeader)
        .then(response => response.json())
        .then(json => dispatch(setCategories(json)))
}

