import { 
    SELECT_CATEGORY,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_CATEGORIES
} from '../actions';
import { combineReducers } from 'redux';
import { uniq } from 'lodash';

const selectedCategory = (state = 'all', action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

const _initial_posts_state = {
    isFetching: false,
    posts: []
}

const posts = (state = _initial_posts_state, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsByCategory = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.category], action)
            }
        default:
            return state
    }
}

const categories = (state = ['all'], action) => {
    switch(action.type) {
        case SET_CATEGORIES: 
            const newState = action.categories.slice();
            newState.sort();
            return uniq([
                ...state,
                ...newState
            ])
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts,
    selectedCategory,
    categories,
})

export default rootReducer