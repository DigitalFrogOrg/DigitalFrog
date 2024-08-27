import React from 'react'
import images from '../../../public/images/images.js';

function header() {
  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row' style={{alignItems:'center'}}>
            <div className='col-sm-5'>
              <div className='navigation'>
                <ul>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Our Process</a></li>
                  <li><a href='#'>Portfolio</a></li>
                  <li><a href='#'>FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className='col-sm-2'>
              <img src={images.logo} alt='Logo' />
            </div>
            <div className='col-sm-5'>
               <div className='buttons'>
                  <button type="button" class="whole-btn">Contact Us</button>
                  <button type="button" class="second-btn"><span>Call Now</span> <br/> +1 310 388 6435 </button>
                  <button type="button" class="dark-mode">ful</button>
               </div>
            </div>
          </div>
        </div>  
      </header>
    </>
  )
}

export default header
