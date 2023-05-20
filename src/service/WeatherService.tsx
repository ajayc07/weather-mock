import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FAVORITE_LOCATION, WEEK_DATA } from '../mocks/temperature.mock';
import { CITIES } from '../mocks/location.mock';

const mock = new MockAdapter(axios);

// Mocking API call with help of axios-mock-adapter to pass sync data to async data
mock.onGet('/api/weather/weekData').reply(200, {
    data: WEEK_DATA
});

mock.onGet('/api/weather/favoriteCity').reply(200, {
    data: FAVORITE_LOCATION
});

mock.onGet('api/weather/allCities').reply(200, {
    data: CITIES
});

// Api call using axios
export function getWeekData() {
    return axios.get('/api/weather/weekData')
        .then(response => response.data.data)
        .catch(error => {
            console.log('Some Error Occurred', error);
            throw error;
        })
}

export function getFavoriteLocationData() {
    return axios.get('/api/weather/favoriteCity')
        .then((response) => response.data.data)
        .catch(error => {
            console.log('Some Error Occurred', error);
            throw error;
        })
}

export function getAllCities() {
    return axios.get('api/weather/allCities')
        .then(response => response.data.data)
        .catch(error => {
            console.log('Some Error Occurred', error);
            throw error;
        })
}

