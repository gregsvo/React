import axios from 'axios';

const API_KEY = '0001fa10f27a7d274a553471fd5688b7';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

// do this to keep our action types consistent between action creators and our reducers
// extract type of action to separate variable and export it. assign it to the const FETCH_WEATHER.
// instead of using a string as type, assign it to FETCH_WEATHER variable.
// for example, if someone changed FETCH_WEATHER var, would be inconsistent between action creator and reducer > bug
// will refernce same var in reducer so we don't have to be copying strings between files. single source of action type.
// so, could change string in future and would remain consistent between action and reducers.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // const url = `${ROOT_URL}&q=${city},us`;
    const url = `${ROOT_URL}${city},us&APPID=${API_KEY}`;
    // returning request, but it doesn't have any of our data. We are returning a PROMISE.
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
