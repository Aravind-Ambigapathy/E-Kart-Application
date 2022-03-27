import React from 'react';
import Button from '@mui/material/Button';

function Women() {
    return (
        <div>
            <div class="dropdown">
                <Button style={{
                    color: 'black',
                    fontWeight: 700,
                }}>WOMEN</Button>
                <div className="dropdown-content">
                    <div className='modecontent'>
                        <h6> Western Wear</h6>
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
                        <h6> Sports & Active Wear</h6>
                        <p>Clothing</p>
                        <p>Footwear</p>
                        <p>Sports Accessories</p>
                        <p>Sports Equipment</p>
                        <p>Sarees</p>
                        <hr />
                        <h6>Belts, Scarves & More</h6>
                    </div>
                    <div className='modecontent'>
                        <h6> Lingerie & Sleepwear</h6>
                        <p>Briefs</p>
                        <p>Shapewear</p>
                        <p>Swimwear</p>
                        <p>Camisoles & Thermals</p>
                        <p>Saree</p>
                        <hr />
                        <h6>Beauty & Personal Care</h6>
                        <p>Premium Beauty</p>
                        <p>Makeup</p>
                        <p>Skincare</p>
                        <p>Shrugs</p>
                        <p>Lipsticks</p>
                        <p>Fragrances</p>
                        <hr />
                        <h6>Kurtas & Suits</h6>
                        <p>Ethnic Wear</p>
                        <p>Leggings, Salwars & Churidars</p>
                        <p>Skirts & Palazzos</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Women