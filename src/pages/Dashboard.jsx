import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Dashboard = (props) => {
    const [value,setValue]=useState('');
    const myUsers=props.userList.filter(user =>user.fname.toLowerCase().includes(value.toLowerCase()))
  return (
    <>
     <div className='w-75 mx-auto my-4'>
      <input onChange={e => {setValue(e.target.value)}} type="text" placeholder='Search..' className='form-control w-50 mx-auto' />

     <div className="create_btn ">
        <Link to='/users/create'><button className='btn btn-primary'>Create a new user</button></Link>
    </div>
      <table className="table table-hover table-bordered border-info ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope='col'>Image</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Email</th>
        <th scope="col">Edit</th>
        <th scope="col">Date</th>

      </tr>
    </thead>
    <tbody>
    {
      myUsers.map(user => {
        return(
          <tr key={user.id}>           
            <td>{user.id}</td>
            <td className='img'><img src={user.avatar} alt="" /></td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.username}</td>
            <td>
                <Link state={{id:user.id}} to={`/users/edit/${user.id}`}>
                    <button  className='btn btn-warning'>Edit</button>
                </Link>
                <button onClick={ async () => {
                   await axios.delete(`http://localhost:3001/users/${user.id}`)
                   window.location.reload();
                    
                }} className='btn btn-danger mx-2'>Delete</button>
            </td>
            <td>{user.date}</td>
        </tr>
        )
      })
    }
   
    
  </tbody>
</table>

    </div>


    </>
    
  )
}

export default Dashboard