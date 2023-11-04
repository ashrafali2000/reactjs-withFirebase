import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import SignUp from "./pages/auth/signUp";
import SignIn from "./pages/auth/signIn";
import Dashboard from "./pages/dashboard";
import AllBlogs from "./pages/allBlogs";
import { AuthContext } from "./context/authCtx";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  const signInHandler = (uid) => {
    setIsLoggedIn(uid)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <AuthContext.Provider value={{
            isLoggedIn
          }}>
            <Navbar />
          </AuthContext.Provider>
        }>
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/signin"
            element={
              <AuthContext.Provider
                value={{
                  signInHandler,
                }}
              >
                <SignIn />
              </AuthContext.Provider>
            }
          />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route index element={
             <AuthContext.Provider
             value={{
               userId: isLoggedIn,
             }}
           >
          <Dashboard />
          </AuthContext.Provider>
          
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
