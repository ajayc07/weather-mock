import React, { useEffect, useState } from 'react';

import '../style/WeatherDetails.scss'

interface WeatherDetailsProps {
    searchValue?: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ searchValue }) => {

    const DEFAULT_CITY = 'Madurai';

    const [lastUpdatedTime, setLastUpdatedTime] = useState(new Date().toLocaleTimeString([], {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }));

    // the useEffect hook is used to schedule a setTimeout callback function with a delay of 1000 milliseconds (1 seconds).
    // To update the time for every one second
    useEffect(() => {
        setInterval(() => {
            const dateTime = new Date().toLocaleTimeString([], {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            });
            setLastUpdatedTime(dateTime);
        }, 1000)
    }, [])

    return (
        <>
            <section className="details">
                <div className="location-name">{searchValue || DEFAULT_CITY}</div>
                <div className="temperature-container">
                    <div className="pictorial"></div>
                    <div className="temperature">33&deg;C</div>
                </div>
                <div className="temperature-description">Partly Cloudy</div>
            </section>
            <div className="last-updated-details">{lastUpdatedTime}</div>
        </>
    )
}

export default WeatherDetails;