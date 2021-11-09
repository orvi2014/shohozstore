import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';


const HomeScreen = ({match}) => {
    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;
    const dispatch = useDispatch()
    const productList=useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(()=>{
        dispatch(listProducts(keyword, pageNumber));

    },[dispatch, keyword, pageNumber])

    
    return (
        <>
        <Meta title='Home' />
           
            {!keyword ? <ProductCarousel/> :<Link to='/' className='btn btn-outline-primary mb-3'>Back to Home</Link>}
        
            <h1>Latest Products</h1>
            {loading ? <Loader>Loading...</Loader> : error ? <Message variant='danger'>{error}</Message> : <Row >
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="align-items-stretch d-flex">
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>}
            
             <Paginate page={page} pages={pages} pageNumber={pageNumber} keyword={keyword ? keyword : ''}></Paginate>   
            
        </>
    )
}

export default HomeScreen
