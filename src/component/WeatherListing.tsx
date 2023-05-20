import React, {useState, useEffect} from 'react';

import WeatherCard from '../component/WeatherCard';

import '../style/WeatherListing.scss';

import { getFavoriteLocationData, getWeekData } from '../service/WeatherService';

const WeatherListing: React.FC = () => {

    const [weekData, setWeekData] = useState([]);

    const [favoriteLocation, setFavoriteLocation] = useState([]);

    // Triggering getWeekData Api call from Service
    useEffect(() => {
        getWeekData()
        .then(data => {setWeekData(data)})
        .catch(error => console.error(error));
    },[]);

    // Triggering getFavoriteLocationData Api call from Service
    useEffect(() => {
        getFavoriteLocationData()
        .then(data => setFavoriteLocation(data))
        .catch(error => console.error(error));
    },[])

    return (
        <>
            <section className="weather-listing-container">
                {
                    weekData?.map((weekData, index) =>
                        <WeatherCard key={index}
                            displayDetails={weekData} isSmallCard={true} />
                    )
                }
            </section>

            <div className="favorite-region-listing">
                {
                    favoriteLocation.map((favLocation, index) =>
                        <WeatherCard key={index} displayDetails={favLocation} isSmallCard={false} />
                    )
                }
            </div>
        </>
    )
}

export default WeatherListing;