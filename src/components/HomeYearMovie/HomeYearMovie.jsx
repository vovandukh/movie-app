import React, { useEffect, useState } from 'react';
import classes from './HomeYearMovie.module.scss'
import { Col, Container, Row } from 'react-bootstrap';
import PlayBtn from './../PlayBtn/PlayBtn';

const HomeYearMovie = props => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        if (!props.loading) {
            setMovie(props.movie.results[0])
        }
    }, [props.loading, props.movie]);
    return (
        <div className={classes.wrap_movie} style={movie ? { background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` } : null}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={classes.wrap_description}>
                            <h1 className={classes.title}>{!!movie ? movie.title : null}</h1>
                            <h4 className='mb-4 mt-4'>Movie of the year</h4>
                            <p>{!!movie ? movie.overview : null}</p>
                            <div className='mt-5'><PlayBtn /></div>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className={classes.img_wrap}>
                            <img src={!!movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null} alt="" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default HomeYearMovie;