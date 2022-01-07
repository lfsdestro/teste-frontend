import './index.css';
import Important from './Important';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Important />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
