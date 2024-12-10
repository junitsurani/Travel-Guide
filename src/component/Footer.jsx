import React from "react";
import { useSpring, animated } from "react-spring";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Animation for smooth entrance
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.footer
      style={fadeIn}
      className="bg-gray-900 text-white py-12 px-6 md:px-20"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Company Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Travel Guide</h2>
          <p className="text-lg">
            All what you need..!!
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                FAQ’s
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal and Resources */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition duration-300 ease-in-out"
              >
                Risk Disclosure
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Travel Guide. All Rights Reserved.</p>
      </div>
    </animated.footer>
  );
};

export default Footer;
