import React from "react";
import logo from "../assets/Altera.svg";
import fb from "../assets/FooterIcons/facebook.svg";
import tw from "../assets/FooterIcons/twitter.svg";
import ig from "../assets/FooterIcons/instagram.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full py-12 md:py-20">
      <div
        className="absolute 
        w-[220px] h-[300px] 
        top-[28%] left-[-10%]
        sm:top-[-8%] sm:left-[-15%]
        lg:top-[-8%] lg:left-[-1%] 
        pointer-events-none  

  bg-[radial-gradient(circle_at_top_left,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
  blur-[60px] z-10"
      ></div>
      <div
        className="absolute w-[150px] h-[150px] 
        bottom-0 right-0
        sm:bottom-[20%] sm:right-[-10%]
        md:bottom-0 md:right-[-5%]
        lg:bottom-0 lg:right-[1%]
        pointer-events-none
        
  bg-[radial-gradient(circle_at_bottom_right,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
  blur-[70px] z-10"
      ></div>

      <div
        className="
      container mx-auto
      px-6 md:px-16 lg:px-24
      grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]
      gap-12
      justify-between
      text-white
    "
      >
        <div className="flex flex-col gap-2">
          <img src={logo} alt="" className="w-20 mb-4" />
          <p className="text-sm text-white/70 max-w-xs">
            We offer the best electric cars of the most recognized brands in the
            world.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-2 text-sm leading-relaxed text-white/70">
            <li>About</li>
            <li>Cars</li>
            <li>History</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Information</h4>
          <ul className="space-y-2 text-sm leading-relaxed text-white/70">
            <li>Request a quote</li>
            <li>Find a dealer</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow us</h4>
          <div className="flex gap-6 text-white/70">
            <img src={fb} alt="facebook" />
            <img src={tw} alt="twitter" />
            <img src={ig} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
