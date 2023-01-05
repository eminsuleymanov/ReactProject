import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2">
                    <Link to='/'>MyUser.az</Link>

                </div>
                <div className="col-lg-10 text-end">
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/adduser'>Add User</Link>


                </div>
            </div>
        </div>
    </header>
  )
}

export default Header