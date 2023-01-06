import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import logo from '../../assets/images/logo.png';
import { Nav } from 'react-bootstrap';

const Sidebar = (props) => {
    const { sideShow, setSideShow } = props;
    const [showSubMovies, setShowSubMovies] = useState(false);
    const [showSubTv, setShowSubTv] = useState(false);
    const showSubDropdowm = (type) => {
        if (type === 'movies') {
            showSubMovies ? setShowSubMovies(false) : setShowSubMovies(true);
        } else {
            showSubTv ? setShowSubTv(false) : setShowSubTv(true)
        }
    }
    return (
        <aside className={sideShow ? `${classes.sidebar} ${classes.side_active}` : classes.sidebar} onClick={(e) => { e.stopPropagation() }}>
            <div className={classes.sidebar_head}>
                <div className={classes.logo_wrap}>
                    <img src={logo} alt="brand" />
                </div>
                <button className={classes.btn_close} onClick={() => { setSideShow(false) }}>
                    <i className='fas fa-times'></i>
                </button>
            </div>
            <div className={classes.menu_wrap}>
                <ul className={classes.menu}>
                    <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Home</Nav.Link></li>
                    <li className={classes.menu_item}>
                        <Nav.Link className={classes.menu_link}>Movies</Nav.Link>
                        <button className={classes.submenu_toggler} onClick={() => showSubDropdowm('movies')}>
                            {showSubMovies ? <i className='fas fa-minus'></i> : <i className='fas fa-plus'></i>}
                        </button>
                        <ul className={classes.sub_menu} style={showSubMovies ? { maxHeight: '500px' } : null}>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Popular</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Now Playing</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Upcoming</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Top Rated</Nav.Link></li>
                        </ul>
                    </li>
                    <li className={classes.menu_item}>
                        <Nav.Link className={classes.menu_link}>TV Shows</Nav.Link>
                        <button className={classes.submenu_toggler} onClick={() => { showSubDropdowm('tv') }}>
                            {showSubTv ? <i className='fas fa-minus'></i> : <i className='fas fa-plus'></i>}
                        </button>
                        <ul className={classes.sub_menu} style={showSubTv ? { maxHeight: '500px' } : null} >
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Popular</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Airing Today</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>On TV</Nav.Link></li>
                            <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Top Rated</Nav.Link></li>
                        </ul>
                    </li>
                    <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Celebrities</Nav.Link></li>
                    <li className={classes.menu_item}><Nav.Link className={classes.menu_link}>Blog</Nav.Link></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;