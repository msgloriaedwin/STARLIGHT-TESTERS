import React from 'react'
import '../footer/footer.css'
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
            <p className='link_para pt-6'><a href="#">About</a></p>
            <p className='link_para pt-4'><a href="#">Contact</a></p>
          </div>
          <div className="box">
            <p className="link_name">Resources</p>
            <p className='link_para pt-6'><a href="#">How to play</a></p>
            <p className='link_para pt-4'><a href="#">Community</a></p>
          </div>
          <div className="box">
            <p className="link_name">Legal</p>
            <p className='link_para pt-6'><a href="#">Privacy Policy</a></p>
            <p className='link_para pt-4'><a href="#">Terms of Service</a></p>
          </div>
          <div className="media-icons">
            <a href="">
              <Image src='/assets/icons/XLogo.svg' alt='twitter link' width={24} height={24}/>
            </a>
            <a href="">
              <Image src='/assets/icons/Instagram Icon.svg' alt='instagram link' width={24} height={24}/>
            </a>
            <a href="">
              <Image src='/assets/icons/facebook.svg' alt='facebook link' width={24} height={24}/>
            </a>
          </div>
        </div>
        <div className='copyright-box flex items-center justify-between'>
          <span className="copyright_text">&#169; Remote Bingo LTD.</span>
          <span className="copyright_text">English (UK)</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer