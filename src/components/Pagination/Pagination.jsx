import React  from 'react';
import classes from './Pagination.module.scss'

const Pagination = props => {
    const {setPage , currentPage} = props;
    const totalPages = 500;
    let paginationItems = []
    const createPaginationItem = (i) => {
        return <li
            className={i === currentPage ? classes.active : null}
            key={i}
            onClick={() => setPage(i)}
          >
            <span>{i}</span>
          </li>
    };
    const createElipsis = ()=>{
        return <li><span className={classes.pagination_elipsis}>...</span></li>
    }
        
        const setFirstElem = () =>{
            for(let i = 1 ; i <= 10 ; i++){
                paginationItems.push(createPaginationItem(i))
            }
            paginationItems.push(createElipsis())  
            paginationItems.push(createPaginationItem(totalPages))
        }
        const setNextElem = ()=>{
            paginationItems.push(createPaginationItem(1))
            paginationItems.push(createElipsis())  
            for (let i = currentPage -4; i <= currentPage + 4; i++){
                paginationItems.push(createPaginationItem(i))
            }
            paginationItems.push(createElipsis())  
            paginationItems.push(createPaginationItem(totalPages))
        }
        const setLastElem = () =>{
            paginationItems.push(createPaginationItem(1))
            paginationItems.push(createElipsis()) 
            for (let i = currentPage -4; i <= totalPages; i++){
                paginationItems.push(createPaginationItem(i))
            } 
        }
        if(currentPage < 7){
          setFirstElem()
        }else if (currentPage < totalPages-4 ){
          setNextElem()
        } else {
            setLastElem()
        }

 
    return (
        <ul className={classes.pagination}>
            <li>
                <span><i className='fas fa-chevron-left'></i></span>
            </li>
            {paginationItems}
            <li>
                <span><i className='fas fa-chevron-right'></i></span>
            </li>
        </ul>
    );
};

export default Pagination;