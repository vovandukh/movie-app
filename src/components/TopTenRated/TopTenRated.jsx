import React, { useRef } from 'react';
import classes from './TopTenRated.module.scss';
import VerticalSwiper from '../VerticalSwiper/VerticalSwiper';
import Slider from 'react-slick';
import PlayBtn from '../PlayBtn/PlayBtn';
import { useGetTopRatedMoviesQuery } from '../../features/MoviesApi';

const TopTenRated = () => {
    const topRatedMovies = useGetTopRatedMoviesQuery();
    const parent_swiper = useRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    arrows: true
                },
            },
        ]
    };


    return (
        <div className={classes.top_rated}>
            <h4 className={classes.title}>Top 10 Rated</h4>
            <VerticalSwiper className={classes.vertical_swiper} movies={!topRatedMovies.isLoading ? topRatedMovies.data.results : []} parrentSwiper={parent_swiper} />
            <Slider className='top-ten-swiper' {...settings} ref={parent_swiper}>
                {!topRatedMovies.isLoading ?
                    topRatedMovies.data.results.slice(0, 10).map(el => (
                        <div key={el.id} className={classes.slides}>
                            <img src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`} alt="" className='img-fluid' />
                            <div className={classes.block_description}>
                                <h6>{el.title}</h6>
                                <div className={classes.info}>Release date: <span>{el.release_date}</span></div>
                                <div className={classes.btn_play_wrap}>
                                    <PlayBtn />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    null
                }
            </Slider>
        </div>
    );
};

export default TopTenRated;