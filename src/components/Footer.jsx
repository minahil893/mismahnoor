import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      
      <div className="d-flex flex-column flex-sm-row justify-content-between border-top" style={{marginTop:"3%"}}>
      <ul className="list-unstyled d-flex">
        <li className=""><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className=""><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className=""><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
<div className="container">
  <footer className=" ">
    <div className="row">
    <div className="col-6 col-md-2 mb-3 ">
     
     {/* <h5>Section</h5>
     <ul className="nav flex-column">
       <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
       <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
       <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
       <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
       <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
     </ul> */}
   </div>
      <div className="col-6 col-md-2 mb-3"style={{marginLeft:"10%"}}>
        <h5>GOT A QUESTION</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary ">Reach us at</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary style py-2">missrose.com.pk@gmail.com</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">or Call (Monday - Friday 9am -5pm)</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2 fw-bold">Helpline</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2 style fw-bold">0333-052-9002</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3 "style={{marginLeft:"20%"}}>
        <h5>Quick links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Wholesale Account</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Blogger Account</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Contacy us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Shipping policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Privacy policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Refund policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary py-2">Terms of Service</a></li>


        </ul>
      </div>
    </div>
    
  </footer>
</div>
<div className=" d-flex" style={{marginLeft:"40%"}}>
              <Link className="nav-link  fs-5 me-4" to="#">< FaFacebook/></Link>
              <Link className="nav-link  fs-5 me-4" to="#">< FaInstagram/></Link>
              <Link className="nav-link  fs-5 me-4" to="#">< FaYoutube/></Link>
              <Link className="nav-link  fs-5 me-4" to="#"><FaTiktok /></Link>


            </div>
<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 text-body-secondary border-top fs-6">
      <p>©  2024, Miss Rose Com Pk Powered by Shopify</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
