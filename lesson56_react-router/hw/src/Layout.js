import { Outlet } from 'react-router-dom';
import List from './List';

export default function Layout() {
  return (
    <>
      <List />
      <Outlet />
    </>
  );
}
