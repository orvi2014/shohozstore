import React from 'react'
import {Carousel, Image, Button} from 'react-bootstrap'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarousel = () => {
    const dispatch = useDispatch()
    const productTopRated = useSelector(state => state.productTopRated)
    const {products, loading, error} = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])
    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map(product => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image
                            className="d-block w-100"
                            src="/images/iphone_carousel.jpg"
                            alt={product.name}
                            fluid
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3>{product.name}</h3>

                            <p>{product.description} </p>

                            <p></p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel
