import Form from './features/todos/Form';
import { Route, Routes } from 'react-router-dom';
import List from './features/todos/List';
import View from './features/todos/View';

const ADD_ITEM = {
  name: 'add',
};
const EDIT_ITEM = {
  name: 'edit',
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Form type={ADD_ITEM} />} />
        <Route path="/:id" element={<View />} />
        <Route path="/:id/edit" element={<Form type={EDIT_ITEM} />} />
      </Routes>
    </div>
  );
}

export default App;
