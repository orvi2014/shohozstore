import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap';
import Message from '../components/Message';
import {addToCart} from '../actions/cartActions.js'


const CartScreen = (props) => {
    const productId=props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state=> state.cart)
    const {cartItems} = cart
    console.log(cartItems)
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch, productId, qty])
    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
