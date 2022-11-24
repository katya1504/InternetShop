import './App.css';
import React from 'react';            
import Cart from './Component/Cart/Cart';
import Catalog from './Component/Nav/Catalog';
import NavBar from './Component/Nav/NavBar';
import Blog from './Component/Nav/Blog';

import {                                  
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Component/furnitureComponent/Contact';



function App() {
  return <Router>
    <nav className='menu'>
     <Link to='/NavBar' className='link'>Главная</Link> 
     <Link to='/Catalog' className='link'>Каталог</Link> 
     <Link to='/Blog' className='link'>Фото</Link>
     <Link to='/Cart' className='link'><img src='https://cdn-icons-png.flaticon.com/512/1011/1011286.png?w=740&t=st=1668763195~exp=1668763795~hmac=646c869aa9872be610dbd8ababedaf40a8779b451a2d87cc0eb9b835877d2144' width='25px' height='20px'  alt='Urn'></img></Link>

    </nav>
    <div className='ContactBlock'>
    <Contact/>
    </div>

    <Routes>
    <Route path='/NavBar' element={<NavBar/>} />
      <Route path='/Catalog' element={<Catalog/>} />
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/Cart' element={<Cart/>} />
</Routes>
</Router>

}

export default App;
