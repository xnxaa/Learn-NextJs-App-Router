"use client"


import React, {useState, useRef, useEffect} from 'react';
import "./menu.css";
import Link from 'next/link';

const menuLinks = [
    { path: "/", label: "Home"},
    { path: "/work", label: "Work"},
    { path: "/about", label: "About"},
    { path: "/contact", label: "Contact"},
    { path: "/lab", label: "Lab"},
]

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className='menu-container' ref={container}>
           <div className='menu-bar'>
           <div className='menu-logo'>
           <Link href="/">Codegrid</Link>
           </div>
           <div className='menu-open' onClick={toggleMenu}>
            <p>Menu</p>
        </div>
        </div>
        <div className='menu-overlay'>
        <div className='menu-overlay-bar'></div>
        <div className='menu-logo'>
            <Link href="/">Codegrid</Link>
        </div>
        <div className='menu-close' onClick={toggleMenu}>
            <p>Close</p>
        </div>
        <div className='menu-close-icon'>
            <p>&#x2715;</p>
        </div>
        <div className='menu-copy'></div>
        <div className='menu-links'>
            {menuLinks.map((link, index) => (
                <div className='menu-link-item' key={index}>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                    {/* belajar fungsinya, itu buat ambil link di atas */}
                    <Link href={link.path} classname="menu-link">
                    {link.label}
                    </Link>
                </div>
            </div>
        
        ))}
        </div>
        <div className='menu-info'></div>
        <div className='menu-info-col'>
            <a href='#'>X &#8599;</a>
            <a href='#'>Instagram &#8599;</a>
            <a href='#'>LinkedIn &#8599;</a>
            <a href='#'>Behance &#8599;</a>
            <a href='#'>Dribble &#8599;</a>
        </div>
        <div className='menu-info-col'>
            <p>info@email.com</p>
            <p>1225 444 7448</p>
        </div>
        <div className='menu-preview'>
            <p>View Showreel</p>
        </div>
        </div>
        </div>
    );
}

export default Menu;
