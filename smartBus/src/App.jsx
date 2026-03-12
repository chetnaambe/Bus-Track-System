
import { Routes, Route } from "react-router-dom"
import Nav from './Component/Nav'
import Section1 from './Component/Section1'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'
import Signup from './Pages/Signup'
import Login from "./Pages/Login"



const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={
          <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </>
        } />

        <Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
    
      </Routes>
    </>
  )
}

export default App