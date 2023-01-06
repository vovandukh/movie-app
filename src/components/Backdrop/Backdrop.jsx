import React, { useRef, useEffect } from 'react';
import classes from './Backdrop.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setMovieId, setShowBackdrop } from '../../features/BackdropSlice';
import { useGetMovieVideoQuery } from '../../features/MoviesApi';


const Backdrop = (props) => {
    const { show, movieId } = useSelector(state => state.backdrop);
    const dispatch = useDispatch();
    const trailerMovie = useGetMovieVideoQuery(movieId, { skip: !movieId })
    const videoPlayer = useRef();
    useEffect(() => {
        if (show && !!movieId) {
            if (!trailerMovie.isLoading) {
                const trailers = [];
                trailerMovie.data.results.forEach(el => {
                    if (el.type === 'Trailer') {
                        trailers.push(el)
                    }
                });
                videoPlayer.current.src = `//www.youtube.com/embed/${trailers[0].key}?autoplay=1`
            }
        }
    }, [movieId, show, trailerMovie.data, trailerMovie.isLoading])
    const closeBackdrop = () => {
        videoPlayer.current.src = ''
        dispatch(setShowBackdrop(false));
        dispatch(setMovieId(''));
    }
    return (
        <div className={classes.backdrop}
            style={show ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
            onClick={closeBackdrop}>
            <div className={classes.iframe_holder}>
                <div className={classes.iframe_wrap}>
                    <button title="Close (Esc)" type="button">×</button>
                    <iframe ref={videoPlayer} title='trailer' />
                </div>
            </div>
        </div >
    );
};

export default Backdrop;