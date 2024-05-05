import { Routes , Route } from "react-router-dom"
import Home from "./Components/HomePage/Home"
import Test from "./Test.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Test/>}/>
      </Routes>
    </>
  )
}

export default App
