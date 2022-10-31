import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './features/todos/Form';
// import Form from './features/todos/Form';
import List from './features/todos/List';
import View from './features/todos/View';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Form />} />
            <Route path="/:id" element={<View />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
