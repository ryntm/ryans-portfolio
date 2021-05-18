import React from 'react';
import './Nav.css';
import './script';



function Nav() {

    return (
        <nav>
            <div className="container">
                <div className=" nav-half-left">
                    <ul>
                        <a href="/" className="logo-link">
                            <li className="nav-item-left nav-name">Ryan Tam</li>
                        </a>
                        <a href="https://github.com/ryntm">
                            <li className="nav-item-left">
                                <img className="nav-icons" alt="github-icon" src="https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/GitHub-Mark.png?raw=true" />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/ryanjtam/">
                        <li className="nav-item-left">
                                <img className="nav-icons-linkedin" alt="linkedin-icon" src="https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/linkedin-icon-png--1600.png?raw=true" />
                            </li>
                        </a>
                        <a href="/contact"><li className="nav-item">Contact</li></a>
                        <a href="/portfolio"><li className="nav-item">Portfolio</li></a>
                        <a href="/home"><li className="nav-item">About</li></a>
                        <a href="javascript:void(0);" class="icon" onclick={() => {
                                // let menu = document.getElementsByClassName("menu")
                                console.log('hi')
                                // if (menu.style.display === 'none') {
                                //     menu.style.display = 'block';
                                // } else {
                                //     menu.style.display = 'none';
                                // };
                            }}>
                            <i class="fa fa-bars"></i>
                        </a>
                        <div className="menu">
                            
                                {/* <li> */}
                                    <a href="/home"><li className="menu-item">About</li></a>
                                {/* </li> */}
                                <li>
                                    <a href="/portfolio"><li className="menu-item">Portfolio</li></a>
                                </li>
                                <li>
                                    <a href="/contact"><li className="menu-item">Contact</li></a>
                                </li>
                            
                        </div>
                    </ul>
                </div>
                {/* <div className=" nav-half-right">
                    <ul>

                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Nav