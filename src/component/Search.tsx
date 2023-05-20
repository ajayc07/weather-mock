import React, { useEffect, useState } from "react";

import '../style/Search.scss';

import { getAllCities } from "../service/WeatherService";

// interface are created to set the type of the entity
interface SearchProps {
    handleSearch: (option: string) => void; // handleSearch is a function which has param as option and return void
}

const SearchBox: React.FC<SearchProps> = ({ handleSearch }) => { //handleSearch is props from parent component

    const [cities, setCities] = useState([]); //The useState hook returns an array with two elements: 
    // the current state value and a function to update that state value. 
    // By calling the update function, React will re-render the component and update the state value. 
    //The initial state value is provided as the argument to the useState hook.

    // Fetches data from service
    useEffect(() => {
        getAllCities()
            .then(data => setCities(data))
            .catch(error => console.log('error'));
    }, []) // use effect takes 2 param: callback fn and dependency array
    //The callback function contains the code that will be executed as a side effect. 
    //The dependency array determines when the effect should be re-run. 
    //If the dependency array is empty, the effect will only run once, after the initial render. 
    //If the dependency array contains values, the effect will re-run whenever any of those values change.

    const handleSearchSelection = (event: any) => {
        handleSearch(event.target.value)
    }

    return (
        <>
            <input type="search"
                name="search"
                id="search"
                list="city"
                placeholder="Search City"
                onChange={handleSearchSelection} //binding event local event handler function to onCHange event
            />

            <datalist id="city">
                {cities.map((city, index) =>
                    <option key={index} value={city} />)}
            </datalist>

        </>
    )
}

export default SearchBox;

// To execute a function when a component is unmounting using useEffect hook

// useEffect(() => {
//     // Function to run when component is mounted

//     return () => {
//       // Function to run when component is unmounting
//       console.log('Component is unmounting');
//     };
//   }, []); // Empty dependency array ensures the effect runs only once