import React from "react";
import "./Footer.css";
import Main from "../../../images/Main-1.jpeg"
import Main2 from "../../../images/Main-2.png"





const Footer = () => {
  return (
    
     <footer className="footer">
     <div className="container">
          <div className="row">
               <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                         <li><a href="/home">Home</a></li>
                         <li><a href="/products">Our Products</a></li>
                         <li><a href="/contact">Contact Us</a></li>
                         <li><a href="/about">About Us</a></li>
                    </ul>
               </div>
               <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                         <li><a href="/">FAQ</a></li>
                         <li><a href="/">shipping</a></li>
                         <li><a href="/">returns</a></li>
                         <li><a href="/">order status</a></li>
                         <li><a href="/">payment options</a></li>
                    </ul>
               </div>
               <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                         <li><a href="/">Coffee</a></li>
                         <li><a href="/">Tea</a></li>
                         <li><a href="/">Milk Powder</a></li>
                         <li><a href="/">All Products</a></li>
                    </ul>
               </div>
               <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                         <a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
               </div>
          </div>
     </div>

     <hr className="cp-hr" />
    <p class="copyright">Copyright 2022 - LOGOKING</p>
</footer>
   

  );
};

export default Footer;
