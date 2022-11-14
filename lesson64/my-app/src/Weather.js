import { useSelector } from 'react-redux';
import { selectCity } from './Store/citySlice';

export default function Weather() {
  const city = useSelector(selectCity);
  return (
    <div className='weather'>
    <h3>{city.location.name}</h3>
    <span>
      {city.current.temp_c}°C
      <img src={city.current.condition.icon} alt="icon" />
    </span>
    </div>
  );
}
