import React, { useEffect, useState, useRef } from 'react';
import classes from './VerticalSwiper.module.scss';
import Slider from 'react-slick';
import PlayBtn from '../PlayBtn/PlayBtn';


const VerticalSwiper = (props) => {
    const { loading, movies, parrentSwiper } = props;
    const [id, setId] = useState();
    const swiper = useRef()
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
    }
    useEffect(() => {
        if (movies.length !== 0) {
            setId(movies[0].id)
        }
    }, [loading, movies])
    const setActiveSlide = (movie) => {
        setId(movie.id);
        movies.forEach((el, index) => {
            if (movie.id === el.id) {
                swiper.current.slickGoTo(index);
                parrentSwiper.current.slickGoTo(index);
            }
        });
    }
    return (
        <Slider className='vertical-swiper' {...settings} ref={swiper}>
            {!loading ?

                movies.slice(0, 10).map(el => (
                    <div key={el.id}><div className={el.id === id ? `${classes.slides} ${classes.active} slick-current` : `${classes.slides}`} onClick={(e) => { setActiveSlide(el, e) }}>
                        <img src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`} alt="" className='img-fluid' />
                        <div className={classes.block_description}>
                            <h6 className={classes.title}>{el.title}</h6>
                            <div className={classes.info}>Release date: <span>{el.release_date}</span></div>
                            <div className={`${classes.btn_wrap} mt-3`}>
                                <PlayBtn />
                            </div>
                        </div>
                    </div>
                    </div>
                ))
                :
                null
            }


        </Slider>
    );
};

export default VerticalSwiper;