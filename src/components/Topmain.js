import React from 'react'
import topmainimg from './images/topmainimg.jpg'
import topmainimg1 from './images/topmainimg1.png'
import topmainimg2 from './images/topmainimg2.png'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Topmain() {
    return (
        <div>
            <div >
                <Router>

                    <Link> <img src={topmainimg} /></Link><br /><br />
                    <div className='row'>
                        <div className='col-4'>
                            <Link ><img src='https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/868751f4-4728-44d1-b6d1-529e7a00a58b1646908362561-Bank-strip-SRS-22-Zest.jpg' 
                            width='105%'/></Link>
                        </div>
                        <div className='col-4'>
                            <Link ><img src='https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/12/0a4e14aa-6967-4eb9-b6d6-fb04f53668871647089785252-Paytm_Bank-strip-SRS-22_DK.jpg' 
                            width='105%' /></Link>
                        </div>
                        <div className='col-4'>
                            <Link ><img src='https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/12/6600d63e-2299-4850-bc10-9ec1e46af6881647089785246-Slice_Bank-strip-SRS-22_DK.jpg'
                             width='102%' /></Link>
                        </div>
                    </div>  <br />
                    <div> <a href='https://www.myntra.com/myntra?f=Coupons:STEAL20'><img src={topmainimg1} /></a></div>
                    <button className='viewall'> + View All</button><br /><br />
                    <div>
                      <a href='https://www.myntra.com/noise?f=Categories%3AHeadphones%3A%3AConnectivity%3ATrue%20Wireless&sort=price_asc'>  <img src={topmainimg2} /></a>
                    </div>
                </Router>
            </div>

        </div>
    )
}

export default Topmain