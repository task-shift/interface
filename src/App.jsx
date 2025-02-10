// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { SiEbox } from "react-icons/si";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/index'
import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'
import Shift from './pages/shift/shift'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Index />}
          ></Route>
          <Route
            path="/signin"
            element={<Signin />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup />}
          ></Route>
          <Route
            path="/shift"
            element={<Shift />}
          ></Route>
          {/* <Route
            path="/riders-details/:id"
            element={<RidersDetails />}
          ></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App


