import React from 'react';
import classes from './Header.module.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, CELEBRITIES_ROUTE, BLOG_ROUTE } from '../../utils/consts';

const Header = (props) => {
    const { showSearch, setShowSearch, showUserDropdown, setShowUserDropdown, setSideShow } = props;
    return (
        <header className={classes.header}>
            <Container>
                <Navbar>
                    <Navbar.Brand href="#home" className={classes.logo_wrap}>
                        <img className={classes.logo_image} src={logo} alt="brand" />
                    </Navbar.Brand>
                    <div className='mx-auto d-none d-lg-block'>
                        <ul className='navbar-nav'>
                            <li className={classes.nav_item}><NavLink to={HOME_ROUTE} className={classes.nav_link}><span>Home</span></NavLink></li>
                            <li className={classes.nav_item}>
                                <NavLink className={classes.nav_link}>
                                    <span>Movies</span>
                                    <i className='fas fa-caret-down ms-1'></i>
                                </NavLink>
                                <ul className={classes.sub_menu}>
                                    <li><NavLink to={'movies/popular'} className={classes.sub_link}>Popular</NavLink></li>
                                    <li><NavLink to={'movies/now-playing'} className={classes.sub_link}>Now Playing</NavLink></li>
                                    <li><NavLink to={'movies/upcoming'} className={classes.sub_link}>Upcoming</NavLink></li>
                                    <li><NavLink to={'movies/top-rated'} className={classes.sub_link}>Top Rated</NavLink></li>
                                </ul>
                            </li>
                            <li className={classes.nav_item}>
                                <NavLink className={classes.nav_link}>
                                    <span>TV Shows</span>
                                    <i className='fas fa-caret-down ms-1'></i>
                                </NavLink>
                                <ul className={classes.sub_menu}>
                                    <li><NavLink to={'tv/popular'} className={classes.sub_link}>Popular</NavLink></li>
                                    <li><NavLink to={'tv/airing-today'} className={classes.sub_link}>Airing Today</NavLink></li>
                                    <li><NavLink to={'tv/on-the-air'} className={classes.sub_link}>On TV</NavLink></li>
                                    <li><NavLink to={'tv/top-rated'} className={classes.sub_link}>Top Rated</NavLink></li>
                                </ul>
                            </li>
                            <li className={classes.nav_item}><NavLink to={CELEBRITIES_ROUTE} className={classes.nav_link}><span>Celebrities</span></NavLink>
                            </li><li className={classes.nav_item}><NavLink to={BLOG_ROUTE} className={classes.nav_link}><span>Blog</span></NavLink></li>
                        </ul>
                    </div>
                    <div className={classes.menu_right}>
                        <div className={classes.search_wrap}>
                            <div className={classes.btn_search}
                                onClick={() => { showSearch ? setShowSearch(false) : setShowSearch(true); }}>
                                <i className="fa fa-search"></i>
                            </div>
                            <div
                                onClick={(e) => { e.stopPropagation() }}
                                className={!showSearch ? `${classes.search_box} ${classes.dropdown}` : `${classes.search_box} ${classes.dropdown_active} ${classes.dropdown}`}>
                                <form action="#">
                                    <input type="search" placeholder='Search' className={classes.search_input} />
                                    <button type='submit' className={classes.search_submit}><i className='fa fa-search'></i></button>
                                </form>
                            </div>
                        </div>
                        <div className={classes.avatar_wrap}>
                            <span className={classes.avatar}
                                onClick={() => { showUserDropdown ? setShowUserDropdown(false) : setShowUserDropdown(true) }}
                            >
                                <div className='d-flex align-items-center justify-content-center h-100'>
                                    <i aria-hidden="true" alt="user" className="far fa-user"></i>
                                </div>
                            </span>
                            <div
                                onClick={(e) => { e.stopPropagation() }}
                                className={!showUserDropdown ? `${classes.user_dropdown} ${classes.dropdown}` : `${classes.user_dropdown} ${classes.dropdown_active} ${classes.dropdown}`} >
                                <Nav.Link className={classes.dropdown_item}>
                                    <div className='d-flex align-items-center'>
                                        <div className={classes.right_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.58336 10.1377C4.0207 10.1377 1.83203 10.525 1.83203 12.077C1.83203 13.629 4.00736 14.0304 6.58336 14.0304C9.1467 14.0304 11.3347 13.6424 11.3347 12.091C11.3347 10.5397 9.16003 10.1377 6.58336 10.1377Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.58375 7.92416C8.26575 7.92416 9.62908 6.56083 9.62908 4.87883C9.62908 3.19683 8.26575 1.8335 6.58375 1.8335C4.90242 1.8335 3.53908 3.19683 3.53908 4.87883C3.53308 6.55483 4.88642 7.91816 6.56308 7.92416H6.58375Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.8021 5.77979V8.45312" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1642 7.11605H11.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className='media-text fw-semibold'><span className='m-0'> Register</span></div>
                                    </div>
                                </Nav.Link>
                                <Nav.Link className={classes.dropdown_item}>
                                    <div className='d-flex align-items-center w-100'>
                                        <div className={classes.right_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M10.543 8.01449H2.51562" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.58984 6.0708L10.5418 8.0148L8.58984 9.9588" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M5.67188 4.92614V4.30414C5.67188 2.94748 6.77121 1.84814 8.12854 1.84814H11.3845C12.7379 1.84814 13.8345 2.94481 13.8345 4.29814V11.7248C13.8345 13.0815 12.7345 14.1815 11.3779 14.1815H8.12121C6.76854 14.1815 5.67188 13.0841 5.67188 11.7315V11.1035" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                        <div className='media-text fw-semibold'><span className='m-0'> Login</span></div>
                                    </div>
                                </Nav.Link>
                            </div>
                        </div>
                        <div className={`${classes.sidebar_btn} d-lg-none`} onClick={() => { setSideShow(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect width="4" height="4" fill="white"></rect>
                                <rect x="6" width="4" height="4" fill="white"></rect>
                                <rect x="12" width="4" height="4" fill="white"></rect>
                                <rect y="6" width="4" height="4" fill="white"></rect>
                                <rect x="6" y="6" width="4" height="4" fill="white"></rect>
                                <rect x="12" y="6" width="4" height="4" fill="white"></rect>
                                <rect y="12" width="4" height="4" fill="white"></rect>
                                <rect x="6" y="12" width="4" height="4" fill="white"></rect>
                                <rect x="12" y="12" width="4" height="4" fill="white"></rect>
                            </svg>
                        </div>
                    </div>
                </Navbar>

            </Container>
        </header>
    );
};


export default Header;