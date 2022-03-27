import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {IoLogoYoutube} from 'react-icons/io';

function Bottommain() {
    return (
        <div align='left' className='bg-light'>
            <div align='left' className='bottomshop'>
                <h6>ONLINE SHOPPING</h6>
                <p><a href=''>Men</a></p>
                <p><a href=''>Women</a></p>
                <p><a href=''>Kids</a></p>
                <p><a href=''>Home & Living</a></p>
                <p><a href=''>Beauty</a></p>
                <p><a href=''>Gift Cards</a></p>
                <p><a href=''>Myntra Insider</a></p>
            </div>
            <div align='left' className='bottomcon'>
                <h6>USEFUL LINKS</h6>
                <p><a href=''>Contact Us</a></p>
                <p><a href=''>FAQ</a></p>
                <p><a href=''>Terms Of Use</a></p>
                <p><a href=''>Track Orders</a></p>
                <p><a href=''>Shipping</a></p>
                <p><a href=''>Cancellation</a></p>
                <p><a href=''>Returns</a></p>
                
            </div>
            <div align='left' className='bottomin'>
                <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
                <a href=''><img src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' 
                height='40px'/></a>
              <a href=''> <img  src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png'
              height='40px' /></a><br/><br/>
              <h6>KEEP IN TOUCH</h6>
              <div className='contactus'>
                  <a href='' ><FaFacebookSquare/></a>
                  <a href='' > <BsTwitter /></a >
                  <a href='' ><IoLogoYoutube/></a >
                  <a href='' ><AiOutlineInstagram /></a>                  
              </div>

            </div>
              <div align='left' className='bottomin1'>
                <p>
                <b>100% ORIGINAL</b> guarantee <br/> for all products at myntra.com
                </p>
                <p><b>Return within 30days</b> of<br/> receiving your order</p>
              </div>

        </div>
    )
}

export default Bottommain