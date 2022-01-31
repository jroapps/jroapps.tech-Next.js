import React, { useState } from 'react'

const NavBar = () => {
    const [isActive, setisActive] = useState(false)

    return (
        <header>
            <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <strong>jroapps.tech</strong>
                    </a>
            
                    <a onClick={() => {
                        setisActive(!isActive)
                    }} 
                    role="button" className={`navbar-burger is-dark ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <a className="navbar-item" href="/">
                        Home
                        </a>
            
                        <a className="navbar-item" href="/about">
                        About
                        </a>

                        <a className="navbar-item" href="/pricing">
                        Pricing
                        </a>

                        <a className="navbar-item" href="/contact">
                            Contact Me
                        </a>
                    </div>
                    
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button learn-more-button" href="/about">
                                <i className="fas fa-info-circle"></i>
                                &nbsp;&nbsp; <strong>Learn More</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar