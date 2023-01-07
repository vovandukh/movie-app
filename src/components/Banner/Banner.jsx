import React from 'react';
import classes from './Banner.module.scss';
import bannerImage from '../../assets/images/bg.jpg'
import { Col, Container, Row, Breadcrumb } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE } from './../../utils/consts';

const Banner = (props) => {
    const { title } = props;
    return (
        <div className={classes.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
            <Container>
                <Row className='align-items-center justify-content-center text-center'>
                    <Col sm={12}>
                        <h2 className={classes.title}>{title}</h2>
                        <Breadcrumb className={classes.breadcrumb}>
                            <li><NavLink to={HOME_ROUTE}>Home</NavLink></li>
                            <Breadcrumb.Item >{title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;