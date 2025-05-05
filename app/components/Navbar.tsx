"use client";
import { useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import useClickOutside from "../hooks/useClickOutside";

type NavLink = {
    href: string;
    label: string;
  };
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navLinks: NavLink[] = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'skills' },
      { href: '#contact', label: 'Contact' }
    ];
    const navRef = useRef<HTMLElement>(null);

    // klik outside
    useClickOutside(navRef, () => {
        setIsOpen(false);
        console.log('clicked outside');
    });
  
    useSmoothScroll([isOpen]);

  return (
    <>
      <header ref={navRef} className="fixed w-full z-40 glass shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold gradient-text flex items-center"
            >
              {/* <i className="fas fa-code mr-2"></i>  */}
              DevPortfolio
            </a>

            <nav className="hidden md:flex space-x-8">
              {/* <a href="#home" className="nav-link text-lg">
                Home
              </a> */}
               {navLinks.map((link) => (
                    // <li key={link.href}>
                    <a  key={link.href}
                        href={link.href}
                        className="nav-link text-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </a>
                    // </li>
                ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* <button id="theme-toggle" className="theme-toggle p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                        <FontAwesomeIcon icon={faMoon} className="text-indigo-400" />
                    </button>
                    
                     */}
                   
              <ThemeToggle />
              <button id="mobile-menu-button" 
              className="md:hidden p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        {isOpen && (
        <div
          id="mobile-menu"
          className= {`md:hidden bg-slate-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out  `}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a  key={link.href} href={link.href} className="nav-link text-lg py-2"   onClick={() => setIsOpen(false)}>
               {link.label}
            </a>
            // <a href="#about" className="nav-link text-lg py-2">
            //   About
            // </a>
          ))}
          </div>
        </div>
      )}
      </header>
    </>
  );
}

export default Navbar;
