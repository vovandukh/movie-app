import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery } from '../features/MoviesApi'
import { skipToken } from '@reduxjs/toolkit/dist/query';
import MovieCard from './../components/MovieCard/MovieCard';
import Pagination from '../components/Pagination/Pagination';

const Movies = () => {
    const { params } = useParams();
    const [title, setTitle] = useState();
    const [page, setPage] = useState(1);
    const popularMovies = useGetPopularMoviesQuery(params === 'popular' ? page : skipToken);
    const topRatedMovies = useGetTopRatedMoviesQuery(params === 'top-rated' ? page : skipToken);
    const upcomingMovies = useGetUpcomingMoviesQuery(params === 'upcoming' ? page : skipToken);
    const NowPlaingMovies = useGetNowPlayingMoviesQuery(params === 'now-playing' ? page : skipToken);
    useEffect(() => {
        if (params === 'popular') {
            setTitle('Popular Movies');
        } else if (params === 'now-playing') {
            setTitle('Now Playing Movies')
        } else if (params === 'upcoming') {
            setTitle('Upcoming Movies')
        } else if (params === 'top-rated') {
            setTitle('Top Rated Movies')
        }
        setPage(1)
    }, [params])
    return (
        <>
            <Banner title={title} />
            <Container>
                <section>
                    <Row>
                        {!popularMovies.isLoading && popularMovies.data ?
                            popularMovies.data.results.map(el => (
                                <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                            ))
                            :
                            !NowPlaingMovies.isLoading && NowPlaingMovies.data ?
                                NowPlaingMovies.data.results.map(el => (
                                    <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                                ))
                                :
                                !upcomingMovies.isLoading && upcomingMovies.data ?
                                    upcomingMovies.data.results.map(el => (
                                        <Col key={el.id} className='mb-4' xl={3} lg={4} md={4} sm={6}><MovieCard movie={el} /></Col>
                                    ))
                                    :
                                    !topRatedMovies.isLoading && topRatedMovies.data ?
                                        topRatedMovies.data.results.map(el => (
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

export default Movies;