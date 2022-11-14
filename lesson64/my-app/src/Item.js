import { useDispatch } from 'react-redux';
import { fetchCity } from './Store/citySlice';

export default function Item(props) {
  const dispatch = useDispatch();
  function addAreas(data) {
    // console.log(data);
    if (data.areas.length === 0) {
      dispatch(fetchCity(data.name));
    }
    props.addAreas(data);
  }
  return (
    <>
      <li onClick={() => addAreas(props.data)}>{props.data.name}</li>
    </>
  );
}
