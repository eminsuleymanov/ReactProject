import React from 'react'
import { useState } from 'react';

const UserPage = (props) => {
  const [value,setValue]=useState('');
  const myUsers=props.userList.filter(user =>user.fname.toLowerCase().includes(value.toLowerCase()))
  return (
    <div className='w-75 mx-auto my-5'>
      <input onChange={e => {setValue(e.target.value)}} type="text" placeholder='Search..' className='form-control w-50 mx-auto my-3' />
      <table className="table table-hover table-bordered border-info ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope='col'>Image</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Email</th>
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
            <td>{user.date}</td>
        </tr>
        )
      })
    }
   
    
  </tbody>
</table>

    </div>
  )
}

export default UserPage