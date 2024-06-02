import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './views/Home';
import {Routes, Route} from "react-router-dom";
import About from './views/About';

function App() {
 

  return (
    <>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
      
      </Routes>
    </>
  )
}

export default App
