import React from 'react'
import { Link ,useLocation,useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';




const UserEdit = () => {
    const navigate = useNavigate();

    const location=useLocation()
    const [firstName,setFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [lastName,setLastName]=useState('');
    const [image,setImage]=useState(null);
    const imageHandler=(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    } 
    const date = new Date();


    const userEdit = async() => {
        const newUser={
            fname:firstName,
            lname:lastName,
            username:email,
            avatar:image,
            date:`${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`

            
        }
        
        await axios.put(`http://localhost:3001/users/${location.state.id}`,newUser)
        alert('User Edited!')
        navigate('/dashboard');
        window.location.reload()
    }
   

  return (
    <>
        <div className="w-50 mx-auto edit">
            <div className='form-floating mb-3'>
                <input onChange={e => (setFirstName(e.target.value))} className='form-control' type="text" id='floatingInput' />
                <label htmlFor="floatingInput">Name</label>

            </div>
            <div className='form-floating mb-3'>
                <input onChange={e => (setLastName(e.target.value))} className='form-control' type="text" id='floatingInput' />
                <label htmlFor="floatingInput">Last name</label>

            </div>
            <div className="input-group mb-3">
                <input onChange={e => (setEmail(e.target.value))} type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="input-group mb-3">
                <input onChange={imageHandler} multiple type="file" accept='gif/*|image/*' className="form-control"/>
            </div>
            {image!==null ?<div className='avatar'><img src={image} alt="" /></div>:''}
            <div className="mt-4">
                <button onClick={userEdit} type="submit" className="form-control btn btn-outline-warning ">Save Edit</button>
            </div>
            <div className="mt-2">
               <Link to='/dashboard'><button type="button" className="form-control btn btn-outline-danger">Return</button></Link>
                
            </div>
        

        </div>



    </>
  )
}

export default UserEdit