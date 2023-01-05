import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const UserCreate = () => {
    const navigate = useNavigate();
    const [firstName,setFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [lastName,setLastName]=useState('');
    const [image,setImage]=useState('');
    const date = new Date();

    const imageHandler=(e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {setImage(reader.result)}
    } 

    const UserHandler = () => {
        if (firstName === '' || email === '' || lastName=== '') {
            alert('Need to fill the blanks')
            
        }
        else{
            const addUser = async () => {
                const newUser = {
                    fname: firstName,
                    lname: lastName,
                    username: email,
                    avatar:image,
                    date:`${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`
                }
                const data = await axios.post('http://localhost:3001/users',newUser)
            }
            addUser();
            alert('User Added Successfully!')
            navigate('/dashboard');
            window.location.reload();
    

        }
        

    }


  return (
    <>
    <div className="w-50 mx-auto edit">
            <div className='form-floating mb-3'>
                <input onChange={e => (setFirstName(e.target.value))} className='form-control' type="text" id='floatingInput' required />
                <label htmlFor="floatingInput">Name</label>

            </div>
            <div className='form-floating mb-3'>
                <input onChange={e => (setLastName(e.target.value))} className='form-control' type="text" id='floatingInput' required />
                <label htmlFor="floatingInput">Last name</label>

            </div>
            <div className="input-group mb-3">
                <input type="text" onChange={e => (setEmail(e.target.value))} className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="input-group mb-3">
                <input onChange={imageHandler} multiple type="file" accept='image/*' className="form-control"/>
            </div>
            {image.length>5 ?<div className='avatar'><img src={image} alt="" /></div>:''} 

            <div className="mt-4">
                <button type="button" onClick={UserHandler} className="form-control btn btn-outline-primary ">Create</button>
            </div>
            <div className="mt-2">
               <Link to='/dashboard'><button type="button" className="form-control btn btn-outline-danger">Return</button></Link>
                
            </div>
        

        </div>
    
    </>
  )
}

export default UserCreate