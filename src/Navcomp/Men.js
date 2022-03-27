import React from 'react';
import Button from '@mui/material/Button';

function Men() {
    return (
        <div>
            <div class="dropdown">
                <Button  style={{
                    color: 'black',
                    fontWeight: 700,
                }}>MEN</Button>
                <div className="dropdown-content" align='left' style={{marginLeft:'30px'}}>

                    <div className='modecontent'>
                        <h6>Topwear</h6>
                        <p>T-Shirts</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Sweaters</p>
                        <p>Jackets</p>
                        <p>Suits</p>
                        <hr />
                        <h6>Indian & Festive Wear</h6>
                        <p>Kurtas & Kurta Sets</p>
                        <p>Sherwanis</p>
                        <p>Nehru Jackets</p>
                        <p>Dhotis</p>
                        <hr />
                        <h6> Personal Care & Grooming</h6>
                        <p>Sunglasses & Frames</p>
                        <p>Watches</p>
                    </div>
                    <div className='modecontent'>

                        <h6>Bottomwear</h6>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Track Pants & Joggers</p>
                        <hr />
                        <h6>Innerwear & Sleepwear</h6>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>
                        <p>Vests</p>
                        <p>Sleepwear & Loungewear</p>
                        <hr />
                        <h6>Footwear</h6>
                        <p>Casual Shoes</p>
                        <p>Sneakers</p>
                        <p>Sports Shoes</p>
                        <p>Flip Flops</p>
                    </div>
                    <div className='modecontent'>

                        <h6> Sports & Active Wear</h6>
                        <p>Sports Shoes</p>
                        <p>Sports Sandals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants & Shorts</p>
                        <p>Tracksuits</p>
                        <p>Sports Accessories</p>
                        <p>Swimwear</p>
                        <hr />
                        <h6>Gadgets</h6>
                        <p>Smart Wearables</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                        <p>Flip Flops</p>
                        <hr />
                        <h6>Bags & Backpacks</h6>
                        <p>Luggages & Trolleys</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Men