import React from 'react';

import YupsLogoOrange from '../UI/Assests/YupsLogoOrange.png'

export const Navbar = () => {
    return (
        <div id="home" className='div-container-for-background-color'>
            <a class="navbar-brand" href="#home">
                <img
                    src={YupsLogoOrange}
                    height="35"
                    alt="yups Logo"
                    loading="lazy"
                    className='img-logo-nav'
                />
            </a>
            <ul class="navbar-nav nav-ul">
                <li class="nav-item navigation-item">
                    <a class="nav-link" href="#about-us">About us</a>
                </li>
                <li class="nav-item navigation-item">
                    <a class="nav-link" href="#principles">Our principles</a>
                </li>
                <li class="nav-item navigation-item">
                    <a class="nav-link" href="#testimonials">Testimonials</a>
                </li>
                <li class="nav-item navigation-item">
                    <a class="nav-link" href="#formId">Contact us</a>
                </li>
            </ul>
        </div>
    )
}
