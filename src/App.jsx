import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Principal from './Components/Principal/Principal';
import Login from './Components/Login/Login';
import Usuario from './Components/Usuario/Usuario';
import Registro from './Components/Registro/Registro';
import Blog from './Components/Blog/Blog';


function App() {
  const [Count, SetCount] = useState(0)
    return(
      <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Usuario' element={<Usuario></Usuario>}></Route>
        <Route path='/Registro' element={<Registro></Registro>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
      </Routes>
    );

}
export default App;

