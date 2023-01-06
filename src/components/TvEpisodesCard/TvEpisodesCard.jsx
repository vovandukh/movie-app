import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './TvEpisodesCard.module.scss';
import defaultImage from '../../assets/images/default_image_01-1024x1024-570x321.png';

const TvEpisodesCard = props => {
    return (
        <Card className={classes.card}>
            <Card.Img src={props.episode.still_path ? `https://image.tmdb.org/t/p/original${props.episode.still_path}` : defaultImage}></Card.Img>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <h5>Episode {props.episode.episode_number}</h5>
                    <span className={classes.runtime}>{props.episode.runtime} min</span>
                </div>
                <p>{props.episode.overview}</p>
            </Card.Body>
        </Card>
    );
};

export default TvEpisodesCard;