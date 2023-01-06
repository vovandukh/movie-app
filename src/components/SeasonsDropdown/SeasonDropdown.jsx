import React from 'react';
import classes from './SeasonDropdown.module.scss'
import { Dropdown } from 'react-bootstrap';

const SeasonDropdown = props => {
    const { seasonNumber, seasonsCount, setSeasonNumber } = props;
    const countElem = []
    if (seasonsCount) {
        for (let i = 0; i < seasonsCount; i++) {
            countElem.push(i)
        }
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="default" className={classes.button}>
                <div className='me-4'>Season {seasonNumber}</div>
            </Dropdown.Toggle>
            <Dropdown.Menu className={classes.menu}>
                {
                    countElem.map((el, index) => (
                        <Dropdown.Item key={index} onClick={() => { setSeasonNumber(index + 1) }}>Season {index + 1}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SeasonDropdown;