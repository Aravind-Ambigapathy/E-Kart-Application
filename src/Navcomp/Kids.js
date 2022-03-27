import React from 'react';
import Navcomp from './Navcomp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Kids() {

  const style = {
    position: 'absolute',
    top: '52%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    width: 700,
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
        }}>KIDS</Button>
        <div className="dropdown-content">

          <div className='modecontent'>
            <h6>Boys Clothing</h6>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Shorts</p>
            <p>Jeans</p>
            <p>Trousers</p>
            <p>Clothing Sets</p>
            <p>Ethnic Wear</p>
            <p>Track Pants & Pyjamas</p>
            <p>Jackets & Coats</p>
            <p>Footwear</p>
            <p>Innerwear & Thermals</p>
            <p>Nightwear & Loungewear</p>
            <p>Value Packs</p>
            <hr />
            <h6>Toys</h6>
            <p>Activity Toys</p>
            <p>Soft Toys</p>
            <p>Learning & Development</p>
          </div>
          <div className='modecontent'>
            <h6>Girls Clothing</h6>
            <p>Dresses</p>
            <p>Tops</p>
            <p>Tshirts</p>
            <p>Jeans</p>
            <p>Trousers & Capris</p>
            <p>Co-ords</p>
            <p>Shrugs</p>
            <p>Sweaters & Sweatshirts</p>
            <p>Jackets & Coats</p>
            <hr />
            <h6>Active Wear</h6>
            <p>Clothing</p>
            <p>Footwear</p>
            <p>Sports Accessories</p>
            <p>Sports Equipment</p>
            <p>Sarees</p>
            <p>Kurtha sets</p>
            <p>Value Packs</p>
          </div>
          <div className='modecontent'>
            <h6>Footwear</h6>
            <p>Casual Shoes</p>
            <p>Flipflops</p>
            <p>Sports Shoes</p>
            <p>Flats</p>
            <p>Heels</p>
            <p>School Shoes</p>
            <p>Socks</p>
            <p>Sandels</p>
            <hr />
            <h6> Kids Accessories</h6>
            <p>Bags & Backpacks</p>
            <p>Watches</p>
            <p>Sports Accessories</p>
            <p>Jewellery & Hair accessory</p>
            <p>Sunglasses</p>
            <p>Masks & Protective Gears</p>
            <p>Caps & Hats</p>
            <p>Value Packs</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Kids