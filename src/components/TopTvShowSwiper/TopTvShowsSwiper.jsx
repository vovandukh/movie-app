import React, { useRef, useState } from 'react';
import classes from './TopTvShowsSwiper.module.scss';
import Slider from 'react-slick';
import { useGetDetailShowsQuery, useGetSeasonsShowsQuery, useGetTopRatedTvShowsQuery } from '../../features/TvShowApi';
import { Nav, Tab } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import PlayBtn from './../PlayBtn/PlayBtn';
import { useGetGenresTvShowsQuery } from '../../features/GenresApi';
import SeasonDropdown from '../SeasonsDropdown/SeasonDropdown';
import TvEpisodesCard from './../TvEpisodesCard/TvEpisodesCard';

const TopTvShowsSwiper = () => {
    const topSwiper = useRef();
    const currentSwiper = useRef();
    const shows = useGetTopRatedTvShowsQuery();
    const genres = useGetGenresTvShowsQuery();
    const [showsId, setShowsId] = useState();
    const [seasonsNumber, setSeasonsNumber] = useState(1)
    const details = useGetDetailShowsQuery(showsId, { skip: !showsId });
    const seasons = useGetSeasonsShowsQuery({ id: showsId, season: seasonsNumber }, { skip: !showsId });
    const setActiveSlide = (id) => {
        shows.data.results.forEach((el, index) => {
            if (el.id === id) {
                topSwiper.current.slickGoTo(index);
                currentSwiper.current.slickGoTo(index);
                setShowsId('')
                setSeasonsNumber(1)
            }
        });
    }


    const topSliderOptions = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ]
    }
    const currentSliderOption = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const episodeSwiperOption = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ]
    }
    return (
        <>
            <div className='top-swiper-wrap'>
                <Slider className='top-swiper' ref={topSwiper} {...topSliderOptions}>
                    {!shows.isLoading ?
                        shows.data.results.map(el => (
                            <div key={el.id}>
                                <div onClick={() => { setActiveSlide(el.id) }}>
                                    <img src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`} alt="" className='img-fluid' />
                                </div></div>
                        ))
                        :
                        null
                    }
                </Slider>
            </div>
            <div className={classes.current_swiper_wrap}>
                <Slider ref={currentSwiper} className='current-swiper' {...currentSliderOption}>
                    {!shows.isLoading ?
                        shows.data.results.map(el => (
                            <div key={el.id}>
                                <div className={classes.slide} style={{ background: `url(https://image.tmdb.org/t/p/original${el.backdrop_path})` }}>
                                    <div className={classes.content}>
                                        <Tab.Container defaultActiveKey='overview'>
                                            <Nav variant='tabs' className='justify-content-center tv-shows-tabs' >
                                                <Nav.Item><Nav.Link eventKey='overview' >Overview</Nav.Link></Nav.Item>
                                                <Nav.Item onClick={() => { setShowsId(el.id) }}><Nav.Link eventKey='episodes' >Episodes</Nav.Link></Nav.Item>
                                            </Nav>
                                            <Tab.Content className={classes.slide_description}>
                                                <Tab.Pane eventKey='overview' style={{ color: 'red' }}>
                                                    <div className={classes.logo_wrap}>
                                                        <img src={logo} alt="logo" />
                                                    </div>
                                                    <h1 className={classes.big_title}>{el.name}</h1>
                                                    <div className={classes.air_date}>First air date: <span>{el.first_air_date}</span></div>
                                                    <div className={`${classes.overview} mb-4 mt-4`}>{el.overview}</div>
                                                    <div className='pt-4 mb-5'><PlayBtn /></div>
                                                    <div className={classes.genres}>Genres:
                                                        <ul className={classes.genre_list}>
                                                            {!genres.isLoading ?
                                                                el.genre_ids.map(ids => (
                                                                    genres.data.genres.map(genre => (
                                                                        ids === genre.id ?
                                                                            <li key={genre.id}>{genre.name}</li>
                                                                            :
                                                                            null
                                                                    ))
                                                                ))
                                                                : null
                                                            }
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='episodes'>
                                                    <div className={classes.logo_wrap}>
                                                        <img src={logo} alt="logo" />
                                                    </div>
                                                    <h1 className={classes.big_title}>{el.name}</h1>
                                                    <div className={classes.air_date}>First air date: <span>{seasons.data ? seasons.data.air_date : null}</span></div>
                                                    <div className='mt-4'>
                                                        <SeasonDropdown setSeasonNumber={setSeasonsNumber} seasonNumber={seasonsNumber}
                                                            seasonsCount={details.data ? details.data.number_of_seasons : undefined} />
                                                    </div>
                                                    <Slider className='swiper mt-4 overflow-hidden' {...episodeSwiperOption}>
                                                        {!seasons.isLoading && seasons.data ?
                                                            seasons.data.episodes.map(el => (
                                                                <div key={el.id}><TvEpisodesCard episode={el} /></div>
                                                            ))
                                                            :
                                                            null
                                                        }
                                                    </Slider>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        null
                    }
                </Slider>
            </div>
        </>
    );
};

export default TopTvShowsSwiper;