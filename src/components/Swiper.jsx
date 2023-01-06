import React from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard/MovieCard';

const Swiper = (props) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 9000,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    const { movies, loading } = props
    return (
        <div>
            <Slider className='swiper' {...settings} autoplay={true}>
                {
                    !loading ?
                        movies.results.map((el) => (
                            <MovieCard key={el.id} movie={el} />
                        ))
                        :
                        null
                }
            </Slider>
        </div>
    );
};

export default Swiper;