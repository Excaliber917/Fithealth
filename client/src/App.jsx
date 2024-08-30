import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Toaster } from 'react-hot-toast'
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PhysicalDetails from "./pages/PhysicalDetails"
import { useAuthContext } from "./context/AuthContext"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MentalFitnessChatbot from "./pages/MentalFitnessChatbot"

function App() {

  const { user } = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/physicaldetails" element={<PhysicalDetails />} />
          <Route path="/mentaldetails" element={user ? <MentalFitnessChatbot /> : <Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={user ? <Profile /> : <Home />} />
        </Routes>
        <Toaster />

      </BrowserRouter >

    </>
  )
}

export default App
