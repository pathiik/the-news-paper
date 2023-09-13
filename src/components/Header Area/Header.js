import packagesData from './NavBarData';
import NavBar from './NavBar';
import { useState } from 'react';
// import JavaScript from '../../JavaScript';



export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const navLinks = packagesData.map((link) => {
        return (
            <NavBar
                title={link.title}
                address={link.address}
            />
        )
    })



    function toggleMenuBar() {
        setShowMenu(!showMenu)
    }

    showMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'



    return (
        <>

            <header className='header'>
                <div className='container'>
                    <div className='header-wrapper'>

                        <a href="#" className='header-left'>
                            <img src="Assets/Header Area Assets/logo.png.webp" alt="The News Paper Logo" />
                        </a>

                        <div className='header-right'>
                            <ul className='header-account-area'>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                            </ul>
                            <form className='header-search-form'>
                                <input type='text' placeholder='Search' />
                                <button type='submit'>
                                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#fff' }}></i>
                                </button>
                            </form>
                        </div>
                        <i id='header-right-more-icon' class="fa-solid fa-bars-staggered" onClick={toggleMenuBar} style={{ color: '#ffffff' }}></i>

                        <div className={`header-right-more-menu-overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenuBar}></div>
                        <div className={`header-right-more-menu ${showMenu ? 'show' : ''} `}>
                            <i id='header-right-more-menu-close-icon' class="fa-solid fa-xmark" onClick={toggleMenuBar} style={{ color: '#fff' }}></i>
                            <form className='header-more-menu-search-form'>
                                <input type='text' placeholder='Search' />
                                <button type='submit'>
                                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#fff' }}></i>
                                </button>
                            </form>
                            <ul className='header-more-menu-account-area'>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                            </ul>
                            <nav className='header-more-nav-bar'>
                                <div className='container'>
                                    <ul className='header-more-nav-bar-links'>
                                        {navLinks}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>

                <nav className='nav-bar'>
                    <div className='container'>
                        <ul className='nav-bar-links'>
                            {navLinks}
                        </ul>
                    </div>
                </nav>

            </header>
        </>
    )
}

