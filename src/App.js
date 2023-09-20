import React from 'react';
import './style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Dashboard/Home';
import DashboardLayout from './layouts/Dashboard';
import Contact from './pages/Dashboard/Contact';
import Users from './pages/Dashboard/Users';
import UsersDetail from './pages/Dashboard/UsersDetail';



 function App() {
  return (
    <BrowserRouter >
      <Routes>
       <Route path='/' element={<DashboardLayout/>} >
       <Route index element={<Home />} />
       <Route path='contact' element={<Contact />} />
       <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UsersDetail />} />
       </Route>
        </Routes>

    </BrowserRouter>
  );
}


export default App;