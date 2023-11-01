import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = '/' element={<Navbar />}>
      <Route path = '/signup' element={<SignUp />} />
      <Route path = '/signin' element={<SignIn />} />
      <Route index element={<Home />} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
