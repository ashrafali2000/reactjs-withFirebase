import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = '/' element={<Navbar />}>
      <Route index element={<Home />} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
