import React from 'react'
import topmainimg3 from './images/topmainimg3.png'
import topmainimg4 from './images/topmainimg4.png'


function Secondmain() {
  return (
    <div>
        <div>
           <a href='https://www.myntra.com/men-kurtas?f=Categories%3AKurta%20Sets%2CKurtas&plaEnabled=false&rf=Price%3A35.0_1500.0_35.0%20TO%201500.0'>
                <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
            height='100px' /></a>
        </div>
        <div>
           <a href='https://www.myntra.com/men-kurtas?f=Categories%3AKurta%20Sets%2CKurtas&plaEnabled=false&rf=Price%3A35.0_1500.0_35.0%20TO%201500.0'><img src={topmainimg3} /></a> 
            <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/3e80c999-94aa-4b59-befb-e49a33c474991646993148082-Most-Loved-Brands.jpg'
            height='100px' />
           <a href='https://www.myntra.com/bata?f=Gender%3Amen%20women%2Cwomen&rf=Price%3A199.0_4052.0_199.0%20TO%204052.0'> <img src={topmainimg4} /></a>

        </div>
    </div>
  )
}

export default Secondmain