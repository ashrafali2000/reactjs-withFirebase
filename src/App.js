import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';
import Dashboard from './pages/dashboard';
import AllBlogs from './pages/allBlogs';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = '/' element={<Navbar />}>
      <Route path = '/signup' element={<SignUp />} />
      <Route path = '/signin' element={<SignIn />} />
      <Route path = '/allBlogs' element={<AllBlogs />} />
      <Route index element={<Dashboard />} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
