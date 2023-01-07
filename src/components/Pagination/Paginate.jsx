import React, { useEffect } from 'react';
import classes from './Paginate.module.scss';
import { Pagination } from 'react-bootstrap';

const Paginate = (props) => {
    const { totalPages } = props;
    const items = [];

    console.log(totalPages);
    return (
        <Pagination className='justify-content-center'>
            <Pagination.Prev />
            {items}
            <Pagination.Ellipsis />
            <Pagination.Item>{totalPages}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    );
};

export default Paginate;