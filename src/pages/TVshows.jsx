import React, { useState, useEffect } from 'react';
import Banner from './../components/Banner/Banner';
import { useParams } from 'react-router-dom';
import { useGetTopRatedTvShowsQuery, useGetPopularTvShowsQuery, useGetAiringTodayTvShowsQuery, useGetOnTheAirTvShowsQuery } from '../features/TvShowApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './../components/MovieCard/MovieCard';
import Pagination from '../components/Pagination/Pagination';

const TVshows = () => {
    const [title, setTitle] = useState();
    const { params } = useParams();
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (params === 'popular') {
            setTitle('Popular TV Shows');
        } else if (params === 'airing-today') {
            setTitle('Airing Today TV Shows')
        } else if (params === 'on-the-air') {
            setTitle('Currently Airing TV Shows')
        } else if (params === 'top-rated') {
            setTitle('Top Rated TV Shows')
        }
        setPage(1)
    }, [params])
    const TopRatedTvShows = useGetTopRatedTvShowsQuery(params === 'top-rated' ? page : skipToken);
    const PopularTvShows = useGetPopularTvShowsQuery(params === 'popular' ? page : skipToken);
    const AirTodayTvShows = useGetAiringTodayTvShowsQuery(params === 'airing-today' ? page : skipToken);
    const OnTheAirTvShows = useGetOnTheAirTvShowsQuery(params === 'on-the-air' ? page : skipToken);

    return (
        <>
            <Banner title={title} />
            <Container>
                <section>
                    <Row>
                        {!PopularTvShows.isLoading && PopularTvShows.data ?
                            PopularTvShows.data.results.map(el => (
                                <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                            ))
                            :
                            !AirTodayTvShows.isLoading && AirTodayTvShows.data ?
                                AirTodayTvShows.data.results.map(el => (
                                    <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                                ))
                                :
                                !OnTheAirTvShows.isLoading && OnTheAirTvShows.data ?
                                    OnTheAirTvShows.data.results.map(el => (
                                        <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                                    ))
                                    :
                                    !TopRatedTvShows.isLoading && TopRatedTvShows.data ?
                                        TopRatedTvShows.data.results.map(el => (
                                            <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                                        ))
                                        :
                                        null
                        }
                    </Row>
                    <Pagination setPage={setPage} currentPage={page}/>
                </section>
            </Container>
        </>
    );
};

export default TVshows;