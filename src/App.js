import './App.css';
import Graphdetail from './Component/Graphdetail';
import Listofgraph from './Component/Listofgraph';
import Login from './Component/Login';
import Managegraph from './Component/Managegraph';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/manage' element={<Managegraph/>}></Route>
      <Route path='/list' element={<Listofgraph/>}></Route>
      <Route path='/detail' element={<Graphdetail/>}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
