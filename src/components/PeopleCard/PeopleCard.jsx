import React from 'react';
import classes from './PeopleCard.module.scss';


const PeopleCard = (props) => {
    const {person} = props;
    return (
        <div className={classes.card_wrap}>
         <div className='wrap-image'>
            <img src={`https://image.tmdb.org/t/p/w780${person.profile_path}`} alt="" className='img-fluid' />
         </div>
         <div className={classes.card_body}>
           <h6>{person.name}</h6>
           <span>{person.known_for_department}</span>
         </div>
        </div>
    );
};

export default PeopleCard;