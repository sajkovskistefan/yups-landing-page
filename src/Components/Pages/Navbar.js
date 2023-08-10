import React from 'react';

import YupsLogoOrange from '../UI/Assests/YupsLogoOrange.png'

export const Navbar = () => {
    return (
        <div id="home" className='div-container-for-background-color'>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light whole-nav-container">
                <div class="nav-div-container p-0 m-0">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="/somethingnavbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse navigation-div" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="/">
                            <img
                                src={YupsLogoOrange}
                                height="35"
                                alt="MDB Logo"
                                loading="lazy"
                                className='img-logo-nav'
                            />
                        </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/something">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/something">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/something">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">
                        <a class="text-reset me-3" href="/something">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </nav> */}
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
            </ul>
        </div>
    )
}
