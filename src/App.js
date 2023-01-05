import './App.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  UserPage from "./pages/UserPage";
import HomePage from './pages/HomePage';
import  About  from "./pages/About";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserEdit from './pages/UserEdit';
import UserCreate from './pages/UserCreate';

function App() {
  const[users,setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () =>{
      const response = await axios.get('http://localhost:3001/users');
      // console.log(response.data);
      setUsers(response.data);
    }
    getUsers();

  }, [])

  return (
    <div className="App">      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/users' element={<UserPage userList = {users}  />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/adduser' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard userList = {users} />}/>
          <Route path='/users/edit/:id' element={<UserEdit />} />
          <Route path='/users/create' element={<UserCreate />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
