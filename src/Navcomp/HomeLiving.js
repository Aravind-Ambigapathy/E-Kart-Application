import React from 'react';
import Navcomp from './Navcomp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function HomeLiving() {

  return (
    <div>

      <div class="dropdown">
        <Button style={{
          color: 'black',
          fontWeight: 700,
        }}>HOME & LIVING</Button>
        <div className="dropdown-content">
          <div className='modecontent'>
            <h6> Bed Linen & Furnishing</h6>
            <p>Bedsheets</p>
            <p>Bedding Sets</p>
            <p>Blankets, Quilts & Dohars</p>
            <p>Pillows & Pillow Covers</p>
            <p>Bed Covers</p>
            <p>Diwan Sets</p>
            <p>Chair Pads & Covers</p>
            <p>Sofa Covers</p>
            <p>Flooring</p>
            <p>Carpets</p>
            <p>Floor Mats & Dhurries</p>
            <p>Door Mats</p>
            <hr />
            <h6> Storage</h6>
            <p>Organisers</p>
            <p>Hooks & Holders</p>
            <p>Laundry Bags</p>
          </div>
          <div className='modecontent'>
            <h6>Bath</h6>
            <p>Bath Towels</p>
            <p>Hand & Face Towels</p>
            <p>Beach Towels</p>
            <p>Towels Set</p>
            <p>Bath Rugs</p>
            <p>Bath Robes</p>
            <p>Bathroom Accessories</p>
            <p>Shower Curtains</p>
            <hr />
            <h6> Lamps & Lighting</h6>
            <p>Floor Lamps</p>
            <p>Ceiling Lamps</p>
            <p>Table Lamps</p>
            <p>Wall Lamps</p>
            <p>Outdoor Lamps</p>
            <p>String Lights</p>
            <p>Mirrors</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLiving