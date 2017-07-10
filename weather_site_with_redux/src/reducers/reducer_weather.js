import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    //Redux intercepted promise, and now returns object with actual data
    switch (action.type) {
        case FETCH_WEATHER:
        // return state.concat([ action.payload.data ]) is the same as below:
            return [ action.payload.data, ...state]; //[city, city, city] NOT [city, [city, city]]
    }
    return state;
}
