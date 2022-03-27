import React from 'react';
import Navcomp from './Navcomp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoIosArrowForward } from 'react-icons/io';
import { ImVideoCamera } from 'react-icons/im';

function Studio() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div class="dropdown">
        <Button style={{
          color: 'black',
          fontWeight: 700,
        }}>STUDIO<sup>NEW</sup></Button>
        <div className="dropdown-content">
        <div className='studio'>
          <h1 align='center'><ImVideoCamera /> Studio</h1>
          <p align='center'>Your daily inspiration for everything fashion</p>
          <img src='https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png' height='250px' /><br /><br />
          <p align='center'><button >EXPLORE STUDIO <IoIosArrowForward /></button></p>
        </div>
      </div>
    </div>
    </div >
  )
}

export default Studio