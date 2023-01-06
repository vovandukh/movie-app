import React from 'react';
import classes from './MovieCard.module.scss';
import PlayBtn from '../PlayBtn/PlayBtn';
import defaultImage from '../../assets/images/default_image_01-1024x1024-570x321.png'


const MovieCard = (props) => {
    const { movie } = props;
    return (
        <div className={`${classes.card_wrap} swiper-item`}>
            <div className={classes.card_img}>
                <div className={classes.img_wrap}>
                    <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : defaultImage} className='img-fluid' alt="" />
                </div>
                <div className={classes.block_description}>
                    <h6 className={classes.title}>{movie.title || movie.name}</h6>
                    <div className={classes.info}>Release date: <span>{movie.release_date || movie.first_air_date}</span></div>
                    <div className={`${classes.play_btn_wrap} mt-3`}>
                        <PlayBtn />
                    </div>
                </div>
                <div className={`${classes.block_social} block-social`}>
                    <ul>
                        <li className='share'>
                            <span><i className='fas fa-share-alt'></i></span>
                            <div className={`${classes.share_list_wrap} share-list`}>
                                <div className={classes.share_box}>
                                    <svg width="15" height="40" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                    </svg>
                                    <div className='d-flex align-items-center justify-content-center overflow-hidden h-100'>
                                        <a href='#any'><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href='#any'><i className="fa-brands fa-twitter"></i></a>
                                        <a href='#any'><i className="fa-solid fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button>
                                <i className="fa-sharp fa-solid fa-heart"></i>
                            </button>
                        </li>
                        <li>
                            <span><i className='fas fa-plus'></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;