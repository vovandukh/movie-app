import React from 'react';
import classes from './HeroSwiper.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import logo from '../../assets/images/logo.png';
import PlayBtn from '../PlayBtn/PlayBtn';
import { setShowBackdrop, setMovieId } from '../../features/BackdropSlice';
import { useDispatch } from 'react-redux';
import { useGetGenresMovieQuery } from '../../features/GenresApi';



const HeroSwiper = (props) => {
    const genres = useGetGenresMovieQuery();
    const { popularMovies, loading } = props;
    const dispatch = useDispatch();
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    arrows: false,
                    dots: true
                },
            },
        ]
    };
    const watchTrailer = (id) => {
        dispatch(setMovieId(id))
        dispatch(setShowBackdrop(true))
    }
    return (
        <div className={classes.slider_wrap}>
            <Slider {...settings} className='hero-swiper'>
                {!loading ?
                    popularMovies.results.slice(0, 4).map(el => (
                        <div key={el.id}>
                            <div className={classes.slides} style={{ background: `url(https://image.tmdb.org/t/p/original${el.backdrop_path})` }} >
                                <Container className='h-100 position-relative' style={{ zIndex: 1000 }}>
                                    <Row className='align-items-center h-100'>
                                        <Col lg={7} md={12}>
                                            <div className={classes.logo_wrap}>
                                                <img src={logo} alt="brand" />
                                            </div>
                                            <h1 className={classes.big_title}>{el.original_title}</h1>
                                            <p className={classes.overview}>{el.overview}</p>
                                            <div className='d-flex flex-wrap align-items-center mt-4'>
                                                <span className='text-white mb-3 font-normal'><span className={classes.score_title}>User Score:</span> {el.vote_average * 10}%</span>
                                            </div>
                                            <div className={classes.genres_title}>
                                                <span className={classes.score_title}>Genres:</span>
                                                <ul>
                                                    {!genres.isLoading ?
                                                        el.genre_ids.map(ids => (
                                                            genres.data.genres.map(genre => (
                                                                ids === genre.id ?
                                                                    <li key={genre.id} className={classes.genre_item}>{genre.name}</li>
                                                                    :
                                                                    null
                                                            ))
                                                        ))
                                                        :
                                                        null
                                                    }
                                                </ul>
                                            </div>
                                            <div className={classes.play_btn_wrap}>
                                                <PlayBtn />
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} className={`d-none d-lg-block ${classes.watch_btn_wrap}`}>
                                            <button className={classes.watch_btn} onClick={() => { watchTrailer(el.id) }}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7">
                                                    <polygon fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                    <circle fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                                </svg>
                                                <span>Watch Trailer</span>
                                            </button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    ))
                    :
                    null
                }
            </Slider >
        </div >
    );
};

export default HeroSwiper;