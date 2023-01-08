import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';
import PeopleCard from '../components/PeopleCard/PeopleCard';
import { useGetPopularPeopleQuery } from '../features/PeopleApi';
import Pagination from '../components/Pagination/Pagination';

const Celebrities = () => {
    const [page, setPage] = useState(1)
    const people = useGetPopularPeopleQuery(page);
    return (
        <>
        <Banner title='Celebrities'/>
        <Container>
            <section>
                <Row>
                 {!people.isLoading && people.data?
                 people.data.results.map(el => (
                    <Col xl={2} lg={3} sm={4} className='px-2' key={el.id}><PeopleCard person={el}/></Col>
                 ))
                 :
                 null
                 }
                </Row>
            </section>
            <Pagination setPage={setPage} currentPage={page} />
        </Container>
        </>
    );
};

export default Celebrities;