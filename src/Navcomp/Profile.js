import React from 'react';
import Button from '@mui/material/Button';
import {BsPerson } from 'react-icons/bs';

function Profile() {

  return (
    <div>

      <div className="dropdown">
        <a href='' style={{
          color: 'black',
          fontWeight: 700,
          textDecoration:'none'
        }}> <p className='navicons nav-link active'><BsPerson /></p>Profile</a>
        <div className="dropdown-content">
         
          <div className='modecontent'>
            <p>HELLO ARAVIND</p>
            <p>Mobile no</p><hr/>
            <p>Orders</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            <p>Myntra Insider</p><hr/>
            <p>Myntra Credit</p>
            <p>Coupons</p>
            <p>Saved Cards</p>
            <p>Saved Addresses</p><hr/>
            <p>Edit Profile</p>
            <p>Logout</p>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile