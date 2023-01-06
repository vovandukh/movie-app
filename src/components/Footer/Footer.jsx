import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import logoTMDB from '../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <Row>
                    <Col lg={8}>
                        <ul className={classes.footer_menu}>
                            <li><NavLink>Terms Of Use</NavLink></li>
                            <li><NavLink>Privacy-Policy</NavLink></li>
                            <li><NavLink>Blog</NavLink></li>
                            <li><NavLink>FAQ</NavLink></li>
                            <li><NavLink>Watch List</NavLink></li>
                        </ul>
                        <p className={classes.text}>
                            © 2022 STREAMIT. All logos and styles have been copied from themeforest.net ,
                            for educational and demonstration purposes ,
                            all images and data taken from The Movie Database service.
                        </p>
                    </Col>
                    <Col lg={2} md={6} className='mt-4 mt-lg-0'>
                        <h6>Follow Us :</h6>
                        <ul className={classes.share_social}>
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook'></i></a></li>
                            <li><a href="https://twitter.com/"><i className='fab fa-twitter'></i></a></li>
                            <li><a href="https://github.com/"><i className='fab fa-github'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className='fab fa-instagram'></i></a></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6} className='mt-4 mt-lg-0'>
                        <h6>Powered by:</h6>
                        <a href="https://www.themoviedb.org/">
                            <img src={logoTMDB} alt="" className={`${classes.logodb} img-fluid`} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;