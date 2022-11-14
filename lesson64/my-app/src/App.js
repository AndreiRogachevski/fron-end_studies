import React from 'react';
import { useSelector } from 'react-redux';
import json from './areas.json';
import InnerItem from './InnerItem';
import { selectCity } from './Store/citySlice';
import Weather from './Weather';

function App() {
  const city = useSelector(selectCity);
  return (
    <div className="App">
      <InnerItem items={json} />
      {city?.location && <Weather />}
      {city?.status && <p>{city.statusText}</p>}
    </div>
  );
}

export default App;
