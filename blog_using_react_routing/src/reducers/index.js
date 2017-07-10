// 'combineReducers' is the redux function that allows redux to update state in multiple components.
import { combineReducers } from 'redux';
// PostsReducer is something we wrote, and is a reducer that updates state when the posts action returns data.
import PostsReducer from './reducer_posts';

// Redux drops in new state to the root Reducer/ combineReducers, and all components that reference this state will be re-rendered.
const rootReducer = combineReducers({
    posts: PostsReducer
});

export default rootReducer;
