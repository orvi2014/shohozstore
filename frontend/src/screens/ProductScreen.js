import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Rating from '../components/Rating';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';


const ProductScreen = (props) => {
    const dispatch=useDispatch()
    const productDetails = useSelector(state=> state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(()=>{
        dispatch(listProductDetails(props.match.params.id))
        
    },[dispatch,props.match])


    
    return (
        <>
            <Link className="btn btn-outline-dark my-3" to="/">Go Back</Link>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error} </Message> : (
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews `}/> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Description:</strong> {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong className={product.countInStock >0 ? 'text-primary' : 'text-danger'}>
                                            {product.countInStock >0 ? 'In Stock' : 'Out Of Stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>No Of Units Available:</Col>
                                    <Col>
                                        <strong className={product.countInStock >0 ? 'text-primary' : 'text-danger'}>
                                            {product.countInStock}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn btn-primary w-100' type="button" variant="primary" disabled={product.countInStock === 0}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

            )}
            
        </>
    )
}
            

export default ProductScreen
