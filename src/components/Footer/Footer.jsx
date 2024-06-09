import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className="footer-logo" />
            <p>We bring the finest culinary delights right to your doorstep. Whether you're craving a quick bite or a sumptuous feast, we've got you covered. Experience the joy of eating well, wherever you are. Bon appétit!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+123-456-789</li>
                <li>contact@Littlechefdelivery.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Littlechefdelivery - All Right Reserved.</p>
    </div>
  )
}

export default Footer
