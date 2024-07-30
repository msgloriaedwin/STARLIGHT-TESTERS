import React from 'react'
import './footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo">
            <Image src="/assets/images/Remote Bingo Logo.svg" alt="Remote Bingo Logo" width={113} height={46.5}/>
          </div>
          <div className="box">
            <p className="link_name">Company</p>
            <p className='link_para pt-6'>About</p>
            <p className='link_para pt-4'>Contact</p>
          </div>
          <div className="box">
            <p className="link_name">Resources</p>
            <p className='link_para pt-6'>How to play</p>
            <p className='link_para pt-4'>Community</p>
          </div>
          <div className="box">
            <p className="link_name legal">Legal</p>
            <p className='link_para pt-6'>Privacy Policy</p>
            <p className='link_para pt-4'>Terms of Service</p>
          </div>
          <div className="media-icons">
            <a href="" className='mr-2'>
              <Image src='/assets/icons/XLogo.svg' alt='twitter link' width={24} height={24}/>
            </a>
            <a href="" className='mr-2'>
              <Image src='/assets/icons/Instagram Icon.svg' alt='instagram link' width={24} height={24}/>
            </a>
            <a href="">
              <Image src='/assets/icons/facebook.svg' alt='facebook link' width={24} height={24}/>
            </a>
          </div>
        </div>
        <div className='copyright-box flex justify-between'>
          <div>
            <span className="copyright_text">&#169; Remote Bingo LTD.</span>
          </div>
          <div>
            <span className="copyright_text">English (UK)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer