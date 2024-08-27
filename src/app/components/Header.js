import React from 'react'
import { GoMoon } from "react-icons/go";
import { MdWbSunny } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";


function header() {
  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row' style={{alignItems:'center'}}>
            <div className='col-sm-5'>
              <div className='navigation'>
                <ul>
                  <li><i><RxHamburgerMenu /></i></li>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Our Process</a></li>
                  <li><a href='#'>Portfolio</a></li>
                  <li><a href='#'>FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className='col-sm-2'>
              <img src='./images/black-Logo.png' alt='Logo' />
            </div>
            <div className='col-sm-5'>
               <div className='buttons'>
                  <button type="button" class="whole-btn">Contact Us</button>
                  <button type="button" class="second-btn"><i><VscCallOutgoing /></i><span>Call Now</span> <br/> +1 310 388 6435 </button>
                  <button type="button" class="dark-mode"><GoMoon /></button>
                  <button type="button" class="light-mode"><MdWbSunny /></button>
               </div>
            </div>
          </div>
        </div>  
      </header>
    </>
  )
}

export default header
