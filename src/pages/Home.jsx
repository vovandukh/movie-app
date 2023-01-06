import React from 'react';
import HeroSwiper from '../components/HeroSwiper/HeroSwiper';
import { Container } from 'react-bootstrap';
import ViewAllBtn from '../components/ViewAllBtn/ViewAllBtn';
import { useGetPopularMoviesQuery, useGetUpcomingMoviesQuery } from '../features/MoviesApi';
import Swiper from '../components/Swiper';
import TopTenRated from '../components/TopTenRated/TopTenRated';
import HomeYearMovie from '../components/HomeYearMovie/HomeYearMovie';
import TopTvShowsSwiper from '../components/TopTvShowSwiper/TopTvShowsSwiper';
import { useGetPopularTvShowsQuery } from '../features/TvShowApi';

const Home = () => {
    const popularMovies = useGetPopularMoviesQuery();
    const upcomingMovies = useGetUpcomingMoviesQuery();
    const popularTvShow = useGetPopularTvShowsQuery();
    return (
        <>
            <HeroSwiper popularMovies={popularMovies.data} loading={popularMovies.isLoading} />
            <Container >
                <section>
                    <div className='section-head d-flex justify-content-between'>
                        <h4>Upcoming Movies</h4>
                        <ViewAllBtn />
                    </div>
                    <Swiper movies={upcomingMovies.data} loading={upcomingMovies.isLoading} />
                </section>
                <section>
                    <div className='section-head d-flex justify-content-between'>
                        <h4>Popular Movies</h4>
                        <ViewAllBtn />
                    </div>
                    <Swiper movies={popularMovies.data} loading={popularMovies.isLoading} />
                </section>
                <section>
                    <TopTenRated />
                </section>
                <section>
                    <div className='section-head d-flex justify-content-between'>
                        <h4>Suggested For You</h4>
                        <ViewAllBtn />
                    </div>
                    <Swiper movies={popularMovies.data} loading={popularMovies.isLoading} />
                </section>
            </Container>
            <section>
                <HomeYearMovie movie={popularMovies.data} loading={popularMovies.isLoading} />
            </section>
            <Container>
                <section>
                    <div className='section-head d-flex justify-content-between'>
                        <h4>Top Rated</h4>
                    </div>
                    <TopTvShowsSwiper />
                </section>
                <section>
                    <div className='section-head d-flex justify-content-between'>
                        <h4>Recommended For You</h4>
                        <ViewAllBtn />
                    </div>
                    <Swiper movies={popularTvShow.data} loading={popularTvShow.isLoading} />
                </section>
            </Container>
        </>
    );
};

export default Home;