import React from 'react';
import classes from './PlayBtn.module.scss'

const PlayBtn = () => {
    return (
        <button className={classes.play_btn_wrap}>
            <div className={classes.btn_wrap}>
                <i className='fa fa-play m-2'></i>
                <span>Play now</span>
            </div>
        </button>
    );
};

export default PlayBtn;