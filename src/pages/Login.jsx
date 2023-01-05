import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const admin = [
        {
          uname: 'admin',
          upass: 'admin'
        }
      ];
    const navigate = useNavigate();
    const [username,setUsername] = useState([]);
    const [password,setPassword] = useState([]);


    const loginHandler = () => {  
        const usercheck =  admin.find(user => (user.uname === username && user.upass === password));
        if(usercheck) {
            navigate('/dashboard');
        }else {
          alert("Wrong password or username. You need to login as Admin");
          window.location.reload();
        }
    }

  return (
    <>
        <div className="text-danger w-50 border border-danger mx-auto text-center my-5">
            <h6>To add a new user or edit and delete the exist one, You need to login as an ADMIN</h6>
        </div>
        <div className="w-25 mx-auto my-5">
            <h1 className='text-center my-3'>Log In As Admin</h1>
            <div className=" mb-3 ">
                <div className="w-100">
                    <input type="text" placeholder='Username' value={username} onChange={e => (setUsername(e.target.value))} className="form-control" id="staticEmail" />
                </div>
            </div>
            <div className="mb-3 ">
                <div className="w-100">
                    <input type="password" placeholder='Password' value={password} onChange={e => (setPassword(e.target.value))} className="form-control" id="inputPassword"/>
                    
                </div>
            </div>
            <div className="mb-3">
                <button className='w-100 btn btn-primary' onClick={loginHandler} type='submit'>Login</button>
            </div>
        </div>

    </>
  )
}

export default Login