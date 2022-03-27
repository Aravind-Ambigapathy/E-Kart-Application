import React from 'react';
import Navcomp from './Navcomp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Beauty() {

    return (
        <div>
            <div class="dropdown">
                <Button style={{
                    color: 'black',
                    fontWeight: 700,
                }}>BEAUTY</Button>
                <div className="dropdown-content">

                    <div className='modecontent'>
                        <h6>Makeup</h6>
                        <p>Lipstick</p>
                        <p>Lip Gloss</p>
                        <p>Lip Liner</p>
                        <p>Mascara</p>
                        <p>Eyeliner</p>
                        <p>Kajal</p>
                        <p>Eyeshadow</p>
                        <p>Foundation</p>
                        <p>Primer</p>
                        <p>Concealer</p>
                    </div>
                    <div className='modecontent'>
                        <h6>Skincare, Bath & Body</h6>
                        <p>Face Moisturiser</p>
                        <p>Cleanser</p>
                        <p>Masks & Peel</p>
                        <p>Sunscreen</p>
                        <p>Serum</p>
                        <p>Face Wash</p>
                        <p>Lip Balm</p>
                        <p>Body Lotion</p>
                        <p>Body Wash</p>
                        <p>Body serum</p>
                    </div>
                    <div className='modecontent'>
                        <h6>Haircare</h6>
                        <p>Shampoo</p>
                        <p>Conditioner</p>
                        <p>Hair Cream</p>
                        <p>Hair Oil</p>
                        <p>Hair Gel</p>
                        <p>Hair Color</p>
                        <p>Hair Serum</p>
                        <p>Deodorant</p>
                        <p>Perfume</p>
                        <p>Hair Dryer</p>
                    </div>
                    <div className='modecontent'>
                        <h6>Top Brands</h6>
                        <p>Lakme</p>
                        <p>Maybelline</p>
                        <p>Loreal</p>
                        <p>Bath & Body Works</p>
                        <p>THE BODY SHOP</p>
                        <p>Biotique</p>
                        <p>Mamaearth</p>
                        <p>MCaffeine</p>
                        <p>Nivea</p>
                        <p>Concealer</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Beauty