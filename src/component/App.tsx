import React, { useState } from 'react';

import '../style/App.scss';

import SearchBox from '../component/Search';
import WeatherDetails from '../component/WeatherDetails';
import WeatherListing from '../component/WeatherListing';

const App: React.FC = () => {

  // Declaring useState with an initial value and a setter function
  const [searchValue, setSearchValue] = useState('');

  // Event handling 
  const updateSearchSelection = (event: any) => {
    !!event && setSearchValue(event)
  }

  return (
    <div className="main-container">

      <section className="layout-section">

        <div className="current-selection-update">

          <header>
            <div className="title">Weather</div>
            {/* handleSearch is an output emitter function from child component */}
            {/* values emitted from event will be passed to local function  updateSearchSelection*/}
            <SearchBox handleSearch={updateSearchSelection} />
          </header>
          
          {/* searchValue is an input receiver */}
          {/* searchValue inside curly bracket is the local state variable */}
          <WeatherDetails searchValue={searchValue} />
        </div>

        <div className="list-details">
          <WeatherListing />
        </div>
      </section>

    </div>
  );
};

export default App;
