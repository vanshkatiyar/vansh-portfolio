// src/App.js - FINAL CODE (with C Language & Content Writing Skills)

import React, { useState, useEffect, useRef } from 'react';

// --- DEPENDENCY IMPORTS ---
import Slider from 'react-slick';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact, FaNodeJs, FaPython, FaFigma, FaBars, FaTimes, FaSun, FaMoon, FaGraduationCap, FaSchool, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaQuoteLeft, FaArrowRight, FaArrowLeft, FaPaperPlane, FaDownload, FaPencilAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiGooglesearchconsole, SiGmail, SiC } from 'react-icons/si';

// --- SLICK CAROUSEL CSS IMPORTS ---
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// --- PROFILE & ASSET IMAGES ---
const profileImage = "/images/profile.jpg";
const blogImage1 = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1740";
const blogImage2 = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1740";
const blogImage3 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1740";
const resumeFile = "/files/Vansh-Katiyar-Resume.pdf";
const customCursorImage = "/images/red-cursor.png";

//================================================================================
// 🎨 1. GLOBAL CSS STYLES
//================================================================================
const GlobalStyles = () => (
  <style>{`
    /* --- Base Styles --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap');
    :root {
      --primary-color: #d63031; 
      --secondary-color: #ff7675; 
      --background-color: #f4f7f9;
      --card-background: #ffffff; --text-color: #333333; --text-secondary: #666;
      --nav-background: rgba(255, 255, 255, 0.85); --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      --font-heading: 'Montserrat', sans-serif; --font-body: 'Poppins', sans-serif;
      --container-width: 1200px; --transition-speed: 0.3s ease;
      --spotlight-color: rgba(0, 0, 0, 0.04);
      --navbar-bg-default: transparent;
    }
    body.dark-mode {
      --background-color: #121212; --card-background: #1e1e1e;
      --text-color: #ffffff; --text-secondary: #b3b3b3;
      --nav-background: rgba(28, 28, 28, 0.85); --shadow: 0 5px 15px rgba(0,0,0,0.2);
      --spotlight-color: rgba(255, 255, 255, 0.05);
      --navbar-bg-default: black;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: var(--font-body); background-color: var(--background-color); color: var(--text-color); line-height: 1.6; transition: background-color 0.3s ease, color 0.3s ease; }
    html { scroll-behavior: smooth; }
    a { color: var(--primary-color); text-decoration: none; }
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); font-weight: 700; color: var(--text-color); line-height: 1.2; }
    
    @media (pointer: fine) {
      body { cursor: url(${customCursorImage}), auto; }
      a, button, input, textarea, .slick-arrow, .theme-toggle-slider, .mobile-icon, .skill-card, .project-card { cursor: url(${customCursorImage}), pointer; }
    }

    .section.interactive-bg { position: relative; z-index: 1; }
    .section.interactive-bg::before { content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; background: radial-gradient( circle 600px at var(--mouse-x, -100%) var(--mouse-y, -100%), var(--spotlight-color), transparent 40% ); transition: background 0.1s ease-out; }
    .section { padding: 6rem 0; }
    .container { max-width: var(--container-width); margin: 0 auto; width: 100%; padding: 0 1.5rem; }
    .section-title { font-size: 2.5rem; margin-bottom: 3rem; text-align: center; position: relative; display: inline-block; }
    .section-title::after { content: ''; position: absolute; left: 50%; transform: translateX(-50%); bottom: -10px; width: 60%; height: 4px; background-color: var(--primary-color); }
    .cta-button { background-color: var(--primary-color); color: #ffffff; padding: 15px 30px; border: none; border-radius: 50px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: all var(--transition-speed); display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; }
    .cta-button:hover { background-color: var(--secondary-color); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

    .fade-up, .fade-left, .fade-right, .stat-item { opacity: 0; transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .fade-up { transform: translateY(40px); }
    .fade-left { transform: translateX(-40px); }
    .fade-right { transform: translateX(40px); }
    .fade-up.is-visible, .fade-left.is-visible, .fade-right.is-visible, .stat-item.is-visible { opacity: 1; transform: translateY(0) translateX(0); }

    /*
    ================================================================
    === NAVBAR STYLES ===
    ================================================================
    */
    .navbar { background: var(--navbar-bg-default); height: 80px; display: flex; justify-content: center; align-items: center; font-size: 1.1rem; position: sticky; top: 0; z-index: 999; transition: background-color 0.3s ease-in-out; }
    .navbar-container { display: flex; justify-content: space-between; height: 80px; align-items: center; width: 100%; }
    .navbar-logo { font-size: 1.8rem; font-family: var(--font-heading); font-weight: 800; }
    .nav-menu { display: none; }
    
    .mobile-icon { 
      display: flex;
      align-items: center;
      font-size: 1.8rem; 
    }

    .nav-actions { display: flex; align-items: center; gap: 1rem; }
    .nav-menu.active { 
        display: flex; flex-direction: column; width: 100%; 
        height: calc(100vh - 80px); position: absolute; top: 80px; left: 0; 
        background-color: var(--nav-background); backdrop-filter: blur(10px);
        z-index: 100;
    }
    .nav-menu.active .nav-item { height: auto; }
    .nav-menu.active .nav-link { text-align: center; padding: 2rem; width: 100%; display: table; color: var(--text-color); }
    .nav-menu.active .nav-link:hover { color: var(--primary-color); transform: none; }
    .nav-menu.active .nav-link::after { display: none; }
    
    .theme-toggle-slider {
      background-color: #333;
      border: 2px solid var(--text-secondary);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      position: relative;
      height: 40px;
      width: 80px;
      transition: background-color 0.3s ease;
    }
    .theme-toggle-slider .slider-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 32px;
      height: 32px;
      background-color: #FFF;
      border-radius: 50%;
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .theme-toggle-slider.dark .slider-thumb {
      transform: translateX(38px);
    }
    .theme-toggle-slider .icon {
      font-size: 1.2rem;
      color: #f1c40f;
      transition: opacity 0.3s ease;
    }
    .theme-toggle-slider .icon.moon {
       color: #f39c12;
    }
    .theme-toggle-slider.light .icon.moon { opacity: 0; }
    .theme-toggle-slider.dark .icon.sun { opacity: 0; }

    .navbar.scrolled { background-color: var(--nav-background); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); backdrop-filter: blur(10px); }
    .navbar:not(.scrolled) .navbar-logo, .navbar:not(.scrolled) .theme-toggle-slider, .navbar:not(.scrolled) .mobile-icon { color: #fff; }
    body:not(.dark-mode) .navbar:not(.scrolled) .navbar-logo, body:not(.dark-mode) .navbar:not(.scrolled) .theme-toggle-slider, body:not(.dark-mode) .navbar:not(.scrolled) .mobile-icon { color: #333; }
    .navbar.scrolled .navbar-logo, .navbar.scrolled .theme-toggle-slider, .navbar.scrolled .mobile-icon { color: var(--text-color); }
    @media screen and (min-width: 961px) {
        .nav-menu { display: flex; align-items: center; list-style: none; }
        .mobile-icon { display: none; }
        .nav-item { height: 80px; }
        .nav-link { display: flex; align-items: center; text-decoration: none; padding: 0 1rem; height: 100%; position: relative; transition: color 0.3s ease, transform 0.2s ease-out; font-weight: 500; }
        .nav-link:hover { transform: translateY(-2px); }
        .nav-actions { gap: 1.5rem; }
        .navbar:not(.scrolled) .nav-link { color: #ccc; }
        .navbar:not(.scrolled) .nav-link:hover, .navbar:not(.scrolled) .nav-link.active { color: #fff; }
        body:not(.dark-mode) .navbar:not(.scrolled) .nav-link { color: #666; }
        .navbar.scrolled .nav-link { color: var(--text-secondary); }
        .navbar.scrolled .nav-link:hover, .navbar.scrolled .nav-link.active { color: var(--primary-color); }
        .nav-link.active { font-weight: 600; }
        .nav-link::after { content: ''; position: absolute; bottom: 20px; left: 1rem; right: 1rem; height: 3px; background-color: var(--primary-color); border-radius: 2px; transform: scaleX(0); transform-origin: center; transition: transform 0.3s ease-in-out; }
        .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }
        .navbar:not(.scrolled) .nav-link.active::after, .navbar:not(.scrolled) .nav-link:hover::after { background-color: #fff; }
        body:not(.dark-mode) .navbar:not(.scrolled) .nav-link.active::after, body:not(.dark-mode) .navbar:not(.scrolled) .nav-link:hover::after { background-color: var(--primary-color); }
    }

    /* --- GENERAL STYLES CONTINUED --- */
    .hero-section { min-height: 100vh; height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; padding: 0; }
    .hero-slider { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
    .slide { position: relative; width: 100%; height: 100vh; }
    .slide-bg { width: 100%; height: 100%; background-size: cover; background-position: center; background-color: #222; animation: zoom-in-out 20s 1s infinite alternate; }
    @keyframes zoom-in-out { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
    .hero-overlay { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: 2; }
    .particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 2; }
    .particle { position: absolute; background: rgba(255, 255, 255, 0.15); border-radius: 50%; animation: float 25s infinite linear; }
    @keyframes float { 0% { transform: translateY(100vh) scale(1); opacity: 1; } 100% { transform: translateY(-10vh) scale(0); opacity: 0; } }
    .hero-content { position: relative; z-index: 3; max-width: 800px; padding: 0 20px; animation: fadeInContent 1.5s ease-out forwards; }
    @keyframes fadeInContent { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .hero-headline { color: #fff; font-size: 3.5rem; margin-bottom: 1rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.7); }
    .hero-tagline { color: rgba(255, 255, 255, 0.85); font-size: 1.3rem; margin-bottom: 2rem; font-weight: 400; }
    .hero-buttons { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
    .about-container { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: center; }
    .about-image-wrapper { position: relative; width: 100%; max-width: 350px; justify-self: center; }
    .about-image { width: 100%; border-radius: 15px; box-shadow: 0 0 10px 2px rgba(214, 48, 49, 0.4), 0 15px 30px rgba(0,0,0,0.15); transition: transform var(--transition-speed), box-shadow var(--transition-speed); padding: 5px; border: 4px solid transparent; background-color: var(--card-background); }
    .about-image:hover { transform: scale(1.05); box-shadow: 0 0 20px 5px rgba(214, 48, 49, 0.6), 0 20px 35px rgba(0,0,0,0.2); }
    .about-content { text-align: left; }
    .about-text { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .stats-container { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem; margin-top: 2.5rem; text-align: center; }
    .stat-number { font-size: 2.5rem; font-family: var(--font-heading); color: var(--primary-color); font-weight: 700; }
    .stat-label { font-size: 1rem; color: var(--text-secondary); }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem; }
    .skill-card { background: var(--card-background); padding: 2.5rem 2rem; border-radius: 15px; text-align: center; transition: all var(--transition-speed); box-shadow: var(--shadow); }
    .skill-card:hover { transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.05); box-shadow: 0 15px 30px rgba(214, 48, 49, 0.3); }
    .skill-icon { font-size: 4rem; color: var(--primary-color); margin-bottom: 1rem; }
    .skill-name { font-size: 1.5rem; margin-bottom: 1rem; }
    .skill-level-bar { width: 100%; height: 8px; background-color: #e0e0e0; border-radius: 4px; overflow: hidden; }
    body.dark-mode .skill-level-bar { background-color: #333; }
    .skill-level { height: 100%; background: linear-gradient(90deg, var(--primary-color), var(--secondary-color)); border-radius: 4px; }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-top: 3rem; }
    .project-card { background: var(--card-background); border-radius: 15px; overflow: hidden; box-shadow: var(--shadow); transition: transform 0.4s ease, box-shadow 0.4s ease; display: flex; flex-direction: column; }
    .project-card:hover { transform: perspective(1500px) rotateY(-5deg) scale(1.03); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
    .project-image-wrapper { position: relative; padding-top: 56.25%; /* Default 16:9 aspect ratio */ }
    .project-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; /* Default fit */ }
    .project-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(214, 48, 49, 0.9); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.4s ease; padding: 1rem; }
    .project-card:hover .project-overlay { opacity: 1; }
    .project-description { font-size: 1rem; margin-bottom: 1.5rem; text-align: center; }
    .project-links .project-button { background: white; color: var(--primary-color); padding: 10px 20px; margin: 0 10px; border-radius: 5px; font-weight: 600; text-transform: none; }
    .project-info { padding: 1.5rem; text-align: left; flex-grow: 1; }
    .project-title { font-size: 1.5rem; margin-bottom: 1rem; }
    .project-tech-stack .tech-badge { background-color: var(--background-color); color: var(--text-secondary); padding: 5px 10px; border-radius: 5px; margin-right: 5px; margin-bottom: 5px; font-size: 0.8rem; display: inline-block; }
    @keyframes fly-up { from { opacity: 0; transform: translateY(80vh) translateX(-50%); } 60% { opacity: 1; } to { opacity: 1; transform: translateY(0) translateX(-50%); } }
    .timeline { position: relative; max-width: 1200px; margin: 3rem auto; padding: 5rem 0 3rem 0; }
    .timeline::after { content: ''; position: absolute; width: 2px; top: 5rem; bottom: 50px; left: 31px; margin-left: -1px; background-image: repeating-linear-gradient(var(--primary-color) 0, var(--primary-color) 4px, transparent 4px, transparent 12px); z-index: 0; }
    .timeline-start-icon { position: absolute; top: 0; left: 31px; transform: translateX(-50%) rotate(-45deg); color: var(--primary-color); font-size: 2.5rem; z-index: 2; padding: 8px; opacity: 0; }
    #education.is-visible .timeline-start-icon { animation: fly-up 2s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards; }
    .timeline-end-dot { position: absolute; bottom: 1rem; left: 31px; transform: translateX(-50%) scale(0); width: 24px; height: 24px; background-color: var(--primary-color); border-radius: 50%; z-index: 2; transition: all 0.5s ease-in-out 1.5s; }
    #education.is-visible .timeline-end-dot { transform: translateX(-50%) scale(1); }
    .timeline-item { padding: 1rem 1.5rem 1rem 75px; position: relative; width: 100%; z-index: 1; }
    .timeline-item:nth-child(odd), .timeline-item:nth-child(even) { left: 0; }
    .timeline-icon { position: absolute; width: 50px; height: 50px; left: 31px; transform: translateX(-50%); background-color: var(--card-background); border: 4px solid var(--primary-color); top: 25px; border-radius: 50%; z-index: 2; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; transition: all 0.3s ease; }
    .timeline-content { padding: 20px 30px; background-color: var(--card-background); position: relative; border-radius: 10px; text-align: left; box-shadow: var(--shadow); transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .timeline-content::after { display: none; }
    .timeline-content h3 { font-size: 1.4rem; color: var(--primary-color); }
    .timeline-content h4 { font-size: 1.1rem; margin: 5px 0; color: var(--text-color); }
    .timeline-years { font-size: 0.9rem; color: var(--text-secondary); }
    .timeline-content p { margin-top: 10px; font-weight: 500; }
    .timeline-item:hover .timeline-icon { transform: translateX(-50%) scale(1.1); background-color: var(--primary-color); color: #fff; box-shadow: 0 0 15px rgba(214, 48, 49, 0.5); }
    @media screen and (min-width: 961px) {
        .timeline::after { left: 50%; }
        .timeline-start-icon, .timeline-end-dot { left: 50%; }
        .timeline-item { padding: 1rem 3rem; width: 50%; }
        .timeline-item:nth-child(odd) { left: 0; padding-left: 0; }
        .timeline-item:nth-child(even) { left: 50%; padding-left: 3rem; }
        .timeline-icon { left: auto; }
        .timeline-item:nth-child(odd) .timeline-icon { right: -25px; transform: none; }
        .timeline-item:nth-child(even) .timeline-icon { left: -25px; transform: none; }
        .timeline-item:hover .timeline-icon { transform: scale(1.1); }
        .timeline-content::after { display: block; content: " "; position: absolute; top: 28px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; }
        .timeline-item:nth-child(odd) .timeline-content::after { right: -15px; border-left: 15px solid var(--card-background); border-right: 0; }
        .timeline-item:nth-child(even) .timeline-content::after { left: -15px; border-right: 15px solid var(--card-background); border-left: 0; }
        .timeline-item:hover .timeline-content { transform: translateY(-8px) scale(1.03); box-shadow: 0 12px 25px rgba(214, 48, 49, 0.25); }
    }
    .testimonial-slider-wrapper { position: relative; }
    .testimonial-card { background: var(--card-background); padding: 2.5rem; margin: 0 1rem; border-radius: 15px; text-align: center; box-shadow: var(--shadow); }
    .testimonial-avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.5rem auto; border: 4px solid var(--primary-color); }
    .testimonial-text { font-style: italic; color: var(--text-secondary); margin-bottom: 1.5rem; }
    .testimonial-icon { font-size: 2rem; color: var(--primary-color); opacity: 0.5; margin-bottom: 1rem; }
    .testimonial-client { font-family: var(--font-heading); font-weight: 700; font-size: 1.2rem; }
    .custom-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; font-size: 1.5rem; color: #ffffff; background: var(--primary-color); border-radius: 50%; width: 50px; height: 50px; display: flex !important; align-items: center; justify-content: center; box-shadow: var(--shadow); transition: all var(--transition-speed); }
    .custom-arrow:hover { background: var(--secondary-color); transform: translateY(-50%) scale(1.1); }
    .custom-arrow.slick-arrow::before { content: '' !important; }
    .next-arrow { right: -25px; }
    .prev-arrow { left: -25px; }
    .slick-dots li button:before { font-size: 12px; color: var(--text-secondary); }
    .slick-dots li.slick-active button:before { color: var(--primary-color); }
    .blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-top: 3rem; }
    .blog-card { background: var(--card-background); border-radius: 15px; overflow: hidden; box-shadow: var(--shadow); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; }
    .blog-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
    .blog-image { width: 100%; height: 200px; object-fit: cover; }
    .blog-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; }
    .blog-title { font-size: 1.4rem; margin-bottom: 0.5rem; }
    .blog-excerpt { color: var(--text-secondary); margin-bottom: 1rem; flex-grow: 1; }
    .blog-read-more { color: var(--primary-color); font-weight: 600; text-decoration: none; align-self: flex-start; }
    .blog-read-more:hover { text-decoration: underline; }
    .contact-content { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; margin-top: 3rem; text-align: left; }
    .contact-form-container { background: var(--card-background); padding: 2.5rem; border-radius: 15px; box-shadow: var(--shadow); }
    .form-group { position: relative; margin-bottom: 1.5rem; }
    .contact-form input, .contact-form textarea { width: 100%; padding: 15px; border-radius: 5px; border: 1px solid #444; background: var(--background-color); color: var(--text-color); font-family: var(--font-body); font-size: 1rem; transition: border-color 0.3s ease; }
    .contact-form input:focus, .contact-form textarea:focus { border-color: var(--primary-color); outline: none; }
    .error-message { color: #e74c3c; font-size: 0.875rem; position: absolute; bottom: -1.2rem; left: 0; }
    .success-message { color: #2ecc71; margin-top: 1rem; text-align: center; font-weight: 600; }
    .contact-info { background: var(--card-background); padding: 2.5rem; border-radius: 15px; box-shadow: var(--shadow); }
    .contact-info h3 { margin-bottom: 1.5rem; font-size: 1.5rem; }
    .contact-info p { margin-bottom: 2rem; color: var(--text-secondary); }
    .social-icons { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; }
    .footer-container { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1.5rem; }
    .footer-main { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
    .footer p { color: var(--text-secondary); text-align: center; }
    .footer-socials { margin-bottom: 0; display: flex; align-items: center; gap: 1.5rem; }
    .footer-credits { color: var(--text-secondary); font-size: 0.9rem; }
    .footer-credits span { color: var(--primary-color); font-weight: 600; }
    .footer-trademark { font-size: 0.8rem; opacity: 0.7; }
    .social-icons a, .footer-socials a { 
      transition: transform 0.3s ease; 
      display: inline-flex; 
      align-items: center; 
      justify-content: center;
    }
    .social-icons a { 
      font-size: 2.5rem; 
      width: 2.5rem;
      height: 2.5rem;
    }
    .footer-socials a { 
      font-size: 1.5rem; 
    }
    .social-icons a:hover, .footer-socials a:hover { transform: translateY(-3px); }
    .social-icons a[href*="linkedin.com"] { color: #0A66C2; }
    .social-icons a[href*="facebook.com"] { color: #1877F2; }
    .social-icons a[href*="instagram.com"] { color: #E1306C; }
    .social-icons a[href*="wa.me"] { color: #25D366; }
    .footer-socials .gmail-icon { color: var(--primary-color); }
    .footer { background: #101010; padding: 2.5rem 1rem; text-align: center; border-top: 1px solid #333; }
    body:not(.dark-mode) .footer { background: #e9ecef; border-top: 1px solid #ddd; }
    @media (max-width: 768px) {
      html { font-size: 90%; }
      .section { padding: 4rem 0; }
      .container { padding: 0 1rem; }
      .hero-headline { font-size: 2.8rem; } 
      .hero-tagline { font-size: 1.2rem; }
      .section-title { font-size: 2.2rem; }
      .about-container { grid-template-columns: 1fr; text-align: center; }
      .about-image-wrapper { margin-bottom: 2rem; }
      .about-content { text-align: center; }
      .about-content .section-title { margin: 0 auto 1.5rem auto; }
      .skills-grid, .projects-grid, .blog-grid { grid-template-columns: 1fr; gap: 2rem; }
      .contact-content { grid-template-columns: 1fr; }
      .contact-info { text-align: center; margin-top: 2rem; }
      .social-icons { justify-content: center; }
      .next-arrow { right: 10px; }
      .prev-arrow { left: 10px; }
    }
  `}</style>
);


//================================================================================
// 🛠️ 2. UTILITY HOOKS & COMPONENTS
//================================================================================
const useIntersectionObserver = (options) => {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);
    const observer = useRef(null);
    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((observedEntries) => {
            setEntries(observedEntries);
        }, options);
        const currentObserver = observer.current;
        if (elements.length > 0) {
            elements.forEach(element => currentObserver.observe(element));
        }
        return () => { if (currentObserver) { currentObserver.disconnect(); } };
    }, [elements, options]);
    return [setElements, entries];
};
const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const easeOutCubic = t => (--t) * t * t + 1;
    useEffect(() => {
        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutCubic(frame / totalFrames);
            setCount(Math.floor(end * progress));
            if (frame === totalFrames) { clearInterval(counter); }
        }, frameRate);
        return () => clearInterval(counter);
    }, [end, duration, totalFrames]);
    return count;
};
const AnimatedSection = ({ children, setElements, id, animation = "fade-up", interactiveBg = true }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            if (animation) { ref.current.classList.add(animation); }
            setElements(prev => [...prev, ref.current]);
        }
    }, [setElements, animation]);
    useEffect(() => {
        if (!interactiveBg || !ref.current) return;
        const section = ref.current;
        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            section.style.setProperty('--mouse-x', `${x}px`);
            section.style.setProperty('--mouse-y', `${y}px`);
        };
        section.addEventListener('mousemove', handleMouseMove);
        return () => { section.removeEventListener('mousemove', handleMouseMove); };
    }, [interactiveBg]);
    return (<section id={id} ref={ref} className={`section ${interactiveBg ? 'interactive-bg' : ''}`}>{children}</section>);
};


//================================================================================
// 📄 3. COMPONENT DEFINITIONS
//================================================================================
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavScrolled, setNavScrolled] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = ["home", "about", "skills", "projects", "education", "testimonials", "blog", "contact"];
  return (
    <nav className={`navbar ${isNavScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container container">
        <ScrollLink to="home" smooth={true} duration={500} className="navbar-logo">
          <span style={{ color: 'var(--primary-color)' }}>V</span>ansh
        </ScrollLink>
        
        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map(link => (
            <li className="nav-item" key={link}>
              <ScrollLink to={link} smooth={true} duration={500} spy={true} offset={-80} className="nav-link" activeClass="active" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`theme-toggle-slider ${isDarkMode ? 'dark' : 'light'}`}
            aria-label="Toggle theme"
          >
            <FaSun className="icon sun" />
            <span className="slider-thumb"></span>
            <FaMoon className="icon moon" />
          </button>

          <div className="mobile-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};
const Hero = () => {
  const sliderSettings = { dots: false, infinite: true, speed: 1000, fade: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, cssEase: "ease-in-out", arrows: false };
  const slides = [ "/images/hero-1.jpg", "/images/hero-2.jpg" ];
  const particles = Array.from({ length: 25 });
  return (
    <section id="home" className="hero-section">
      <Slider {...sliderSettings} className="hero-slider">
        {slides.map((url, i) => <div key={i} className="slide"><div className="slide-bg" style={{ backgroundImage: `url(${url})` }}></div></div>)}
      </Slider>
      <div className="hero-overlay"></div>
      <div className="particles">
        {particles.map((_, i) => {
          const size = Math.random() * 5 + 2;
          const style = { left: `${Math.random() * 100}%`, width: `${size}px`, height: `${size}px`, animationDelay: `${Math.random() * 25}s`, animationDuration: `${Math.random() * 15 + 10}s` };
          return <span key={i} className="particle" style={style}></span>;
        })}
      </div>
      <div className="hero-content">
        <h1 className="hero-headline">Hi, I'm Vansh Katiyar</h1>
        <p className="hero-tagline">Front-End Developer, Content Writer & a keen learner</p>
        <div className="hero-buttons">
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="cta-button">View My Work</ScrollLink>
            <a href={resumeFile} download className="cta-button">
                <FaDownload />
                Download Resume
            </a>
        </div>
      </div>
    </section>
  );
};
const StatCounter = ({ end, label }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const count = useCountUp(inView ? end : 0, 2000);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
        const currentRef = ref.current;
        if (currentRef) { observer.observe(currentRef); }
        return () => { if (currentRef) { observer.unobserve(currentRef); } };
    }, []);
    return (<div className="stat-item" ref={ref}><div className="stat-number">{count}+</div><div className="stat-label">{label}</div></div>);
};
const About = ({ setElements }) => (
  <AnimatedSection id="about" setElements={setElements} animation={null}>
    <div className="container">
        <div className="about-container">
            <div className="about-image-wrapper fade-right"><img src={profileImage} alt="Vansh Katiyar" className="about-image" /></div>
            <div className="about-content fade-left">
                <h2 className="section-title" style={{textAlign: 'left', margin: '0 0 1.5rem 0'}}>About Me</h2>
                <p className="about-text">Hi, I’m Vansh Katiyar — a passionate and curious mind from Jodhpur, currently pursuing B.Tech in Computer Science. I thrive at the intersection of creativity and technology, with experience in web development, video editing, graphic design, and content creation.</p>
                <p className="about-text">I enjoy turning ideas into impactful digital experiences — whether it's building clean, user-friendly websites or editing visuals that tell a story. I believe in learning by doing, and I’m always exploring new ways to grow both technically and creatively.</p>
                <p className="about-text">Currently, I’m diving deeper into React, UI/UX design, and integrating AI into web applications. Let’s connect and bring great ideas to life together.</p>
                <div className="stats-container">
                    <StatCounter end={15} label="Projects Completed" />
                    <StatCounter end={3} label="Years of Experience" />
                    <StatCounter end={10} label="Happy Clients" />
                </div>
            </div>
        </div>
    </div>
  </AnimatedSection>
);
const Skills = ({ setElements }) => {
  const skillsData = [ { name: 'React.js', icon: <FaReact />, level: '70%' }, { name: 'Node.js', icon: <FaNodeJs />, level: '50%' }, { name: 'Next.js', icon: <SiNextdotjs />, level: '80%' }, { name: 'Python', icon: <FaPython />, level: '95%' }, { name: 'C Language', icon: <SiC />, level: '85%' }, { name: 'Content Writing', icon: <FaPencilAlt />, level: '90%' }, { name: 'UI/UX Design', icon: <FaFigma />, level: '80%' }, { name: 'MongoDB', icon: <SiMongodb />, level: '20%' }, { name: 'SEO', icon: <SiGooglesearchconsole />, level: '40%' } ];
  return (
    <AnimatedSection id="skills" setElements={setElements}>
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skillsData.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level-bar"><div className="skill-level" style={{ width: skill.level }}></div></div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = ({ setElements }) => {
    const projectsData = [
        { 
            title: "Temperature and Humidity Sensor", 
            description: "A Project based on ESP32 and DHT11 sensor which monitors temperature and humidity of the environment", 
            image: "/images/temp-humidity-project.jpg", 
            stack: ["ESP32", "DHT11 sensor", "DHT server"], 
            links: [
                { label: "View Project", url: "https://drive.google.com/file/d/1cIb8Fy2OUWf-V7q6365e9wEaTZ8Aw0Ds/view?usp=drivesdk" }
            ] 
        },
        { 
            title: "Portfolio Website", 
            description: "A responsive personal portfolio to showcase my skills and projects.", 
            image: "https://via.placeholder.com/400x250/6a11cb/ffffff?text=Portfolio", 
            stack: ["React", "CSS", "Figma"], 
            links: [
                { label: "Live Demo", url: "#" },
                { label: "GitHub", url: "#" }
            ]
        },
        { 
            title: "Automatic Water Dispenser", 
            description: "An automated water dispenser using Arduino and an ultrasonic sensor for touchless operation.", 
            image: "/images/automatic-water-dispenser.png", 
            stack: ["Arduino UNO", "Ultrasonic sensor", "Servo Motor"], 
            links: [
                { label: "View Project", url: "https://drive.google.com/file/d/1KdwlDJbuSvSBUZP8TxysFsRyWhIyWemn/view?usp=sharing" }
            ],
            // You can adjust the '75%' value to best fit your image's shape.
            // '100%' would create a perfect square container.
            // '125%' would create a taller, portrait-style container.
            wrapperStyle: { paddingTop: '75%' },
            imageStyle: { objectFit: 'contain', padding: '0.5rem', background: 'var(--card-background)' }
        }
    ];
    return (
        <AnimatedSection id="projects" setElements={setElements}>
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">{projectsData.map(p => (
                    <div key={p.title} className="project-card">
                        <div 
                            className="project-image-wrapper"
                            style={p.wrapperStyle || {}}
                        >
                            <img 
                                src={p.image} 
                                alt={p.title} 
                                className="project-image" 
                                style={p.imageStyle || {}} 
                            />
                            <div className="project-overlay">
                                <p className="project-description">{p.description}</p>
                                <div className="project-links">
                                    {p.links.map(link => (
                                        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-button">{link.label}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{p.title}</h3>
                            <div className="project-tech-stack">{p.stack.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}</div>
                        </div>
                    </div>
                ))}</div>
            </div>
        </AnimatedSection>
    );
};

const Education = ({ setElements }) => {
    const educationData = [ { icon: <FaGraduationCap />, degree: 'Bachelor of Technology - CSE', institution: 'JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY', years: '2024 - 2028', result: 'CGPA: 9.1' }, { icon: <FaSchool />, degree: 'Class 12 - Science', institution: 'Central Academy Sr.sec School', years: '2022 - 2023', result: 'Percentage: 74' }, { icon: <FaSchool />, degree: 'Class 10', institution: 'Central Academy Sr.sec School', years: '2020 - 2021', result: 'Percentage: 91' } ];
  return (
    <AnimatedSection id="education" setElements={setElements} animation={null}>
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="timeline">
            <div className="timeline-start-icon"><FaPaperPlane /></div>
            {educationData.map((edu, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
                  <div className="timeline-icon">{edu.icon}</div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3><h4>{edu.institution}</h4>
                    <span className="timeline-years">{edu.years}</span><p>{edu.result}</p>
                  </div>
                </div>
            ))}
            <div className="timeline-end-dot"></div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const NextArrow = (props) => { const { className, style, onClick } = props; return ( <div className={`${className} custom-arrow next-arrow`} style={{ ...style }} onClick={onClick} aria-label="Next testimonial" > <FaArrowRight /> </div> ); };
const PrevArrow = (props) => { const { className, style, onClick } = props; return ( <div className={`${className} custom-arrow prev-arrow`} style={{ ...style }} onClick={onClick} aria-label="Previous testimonial" > <FaArrowLeft /> </div> ); };

const Testimonials = ({ setElements }) => {
    const testimonialsData = [
        { name: "Jane Doe", company: "Tech Solutions Inc.", avatar: "https://i.pravatar.cc/150?img=1", text: "Vansh's work on our front-end was exceptional. His attention to detail and understanding of user experience is top-notch. Highly recommended!" },
        { name: "John Smith", company: "Creative Minds Agency", avatar: "https://i.pravatar.cc/150?img=2", text: "The portfolio he built for us was not only beautiful but also incredibly fast and SEO-friendly. Our online presence has never been stronger." },
        { name: "Emily White", company: "E-Commerce Gurus", avatar: "https://i.pravatar.cc/150?img=3", text: "A true professional. Vansh delivered on time and exceeded our expectations. His React skills are impressive." }
    ];
    
    const sliderSettings = {
        dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000, nextArrow: <NextArrow />, prevArrow: <PrevArrow />
    };

    return (
        <AnimatedSection id="testimonials" setElements={setElements}>
            <div className="container">
                <h2 className="section-title">What My Clients Say</h2>
                <div className="testimonial-slider-wrapper">
                    <Slider {...sliderSettings}>
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <FaQuoteLeft className="testimonial-icon" />
                                <p className="testimonial-text">"{t.text}"</p>
                                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                                <h3 className="testimonial-client">{t.name}</h3>
                                <p className="text-secondary">{t.company}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </AnimatedSection>
    );
};
const Blog = ({ setElements }) => {
    const blogData = [
        { title: "10 Essential React Hooks You Should Know", excerpt: "Dive deep into the most powerful and commonly used hooks in React to write cleaner and more efficient code.", image: blogImage1, link: "#" },
        { title: "The Ultimate Guide to SEO for Developers", excerpt: "Learn how to optimize your web applications for search engines, from semantic HTML to structured data.", image: blogImage2, link: "#" },
        { title: "Crafting a Perfect User Experience with CSS", excerpt: "Explore advanced CSS techniques, animations, and design principles to create delightful user interfaces.", image: blogImage3, link: "#" }
    ];
    return (
        <AnimatedSection id="blog" setElements={setElements}>
            <div className="container">
                <h2 className="section-title">My Articles</h2>
                <div className="blog-grid">{blogData.map((post, i) => (
                    <div key={i} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <a href={post.link} className="blog-read-more">Read More →</a>
                        </div>
                    </div>
                ))}</div>
            </div>
        </AnimatedSection>
    );
};

const GmailLogoSVG = () => (
  <svg 
    width="100%"
    viewBox="0 0 134 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
      <g clipPath="url(#clip0_1:194_fix)">
          <path d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z" fill="#4285F4"/>
          <path d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848" fill="#34A853"/>
          <path d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727" fill="#FBBC04"/>
          <path d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576" fill="#EA4335"/>
          <path d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364" fill="#C5221F"/>
      </g>
      <defs>
          <clipPath id="clip0_1:194_fix">
              <rect width="133.333" height="100" fill="white"/>
          </clipPath>
      </defs>
  </svg>
);


const Contact = ({ setElements }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const validate = (fieldValues = formData) => {
    let tempErrors = {...errors};
    if ('name' in fieldValues) tempErrors.name = fieldValues.name ? "" : "Name is required.";
    if ('email' in fieldValues) {
        if (!fieldValues.email) tempErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) tempErrors.email = "Email is not valid.";
        else tempErrors.email = "";
    }
    if ('message' in fieldValues) tempErrors.message = fieldValues.message.length > 10 ? "" : "Message must be at least 10 characters long.";
    setErrors({...tempErrors});
    return Object.values(tempErrors).every(x => x === "");
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate({ [name]: value });
  };
  const handleSubmit = e => { 
    e.preventDefault(); 
    if (validate()) {
        setSubmitted(true); 
        setTimeout(() => setSubmitted(false), 4000); 
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
    }
  };
  return (
    <AnimatedSection id="contact" setElements={setElements}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-form-container fade-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="form-group">
                <textarea name="message" rows="7" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              <button type="submit" className="cta-button">Send Message</button>
              {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
            </form>
          </div>
          <div className="contact-info fade-left">
            <h3>Contact Info</h3>
            <p>Feel free to reach out to me via email or connect with me on social media.</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vansh-katiyar-b5b854318" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vansh.katiyar.786@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <GmailLogoSVG />
              </a>
              <a href="https://www.facebook.com/vansh.katiyar.3979" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/itz._.vansh007?igsh=ZTBucmphY3h6N2Rz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/919509030554" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-main">
        <div className="footer-socials">
            <a href="https://www.linkedin.com/in/vansh-katiyar-b5b854318" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.facebook.com/vansh.katiyar.3979" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/itz._.vansh007?igsh=ZTBucmphY3h6N2Rz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/919509030554" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vansh.katiyar.786@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="gmail-icon">
                <SiGmail />
            </a>
        </div>
        <p>© {new Date().getFullYear()} Vansh Katiyar. All rights reserved.</p>
         <p className="footer-credits">
            Designed & Developed by <span>Vansh Katiyar</span>
        </p>
      </div>
      <p className="footer-trademark">All trademarks are the property of their respective owners.</p>
    </div>
  </footer>
);


//================================================================================
// 🚀 4. MAIN APP COMPONENT
//================================================================================
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [setElements, entries] = useIntersectionObserver({ threshold: 0.2, rootMargin: '0px' });
  
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('preloader-hidden');
      }, 2000); 
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const childrenToAnimate = entry.target.querySelectorAll('.fade-left, .fade-right');
            childrenToAnimate.forEach(child => child.classList.add('is-visible'));
        }
    });
  }, [entries]);

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <GlobalStyles />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main>
        <Hero />
        <About setElements={setElements} />
        <Skills setElements={setElements} />
        <Projects setElements={setElements} />
        <Education setElements={setElements} />
        <Testimonials setElements={setElements} />
        <Blog setElements={setElements} />
        <Contact setElements={setElements} />
      </main>
      <Footer />
    </div>
  );
}

export default App;