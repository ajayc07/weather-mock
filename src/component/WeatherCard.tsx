import React from "react";

import '../style/WeatherCard.scss';

interface DisplayDetails {
    weekDay?: string;
    temperature: number | string;
    city?: string;
    temperatureDesc?: string;
}

interface WeatherCardProps {
    isSmallCard: boolean;
    displayDetails: DisplayDetails;
}

//React.FC is a generic type that stands for "React Function Component". 
// It is a type alias provided by React that represents a functional component in TypeScript.

// Using React.FC as the type for a functional component provides some benefits:
// It automatically infers and provides type information for the props passed to the component.
// It ensures that the component returns a valid React element.
// It includes built-in support for children components.

const WeatherCard: React.FC<WeatherCardProps> = ({ isSmallCard, displayDetails }) => {
    return (
        <>
            {
                <div className={isSmallCard ? "small-card-box" : "big-card-box"}>
                    <div className="label">{isSmallCard ? displayDetails?.weekDay : displayDetails?.city}</div>
                    <div className="temperature-details">
                        <div className="picture"></div>
                        <div className="value">{displayDetails?.temperature}&deg;C</div>
                    </div>
                    {!isSmallCard && <div className="temperature-label">{displayDetails?.temperatureDesc}</div>}
                </div>

            }
        </>
    )
}

export default WeatherCard;

//WeatherCard is defined as a functional component using the React.FC type. 
// The WeatherCardProps type is provided as the generic argument to React.FC, specifying the expected prop types for the component. 

// Using React.FC helps ensure that the component receives the correct props and returns a valid JSX element. 
// It also provides better type checking and tooling support when working with functional components in TypeScript. 
// However, it's worth noting that React.FC is optional, and you can still define functional components without using it if you prefer.