import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Principal from './Component/Principal/Principal';
import Login from './Component/Login/Login';
import Blog from './Component/Blog/Blog';
import Registro from './Component/Registro/Registro';
import Usuario from './Component/Usuario/Usuario';


function App() {
  const [Count, SetCount] = useState(0)
    return(
      <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Usuario' element={<Usuario></Usuario>}></Route>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/Registro' element={<Registro></Registro>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
      </Routes>
    );

}
export default App;

