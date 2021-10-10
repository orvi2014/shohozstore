import React, { useState } from 'react'
import { Form, Button, Col, Card, Row, Image, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = ({history}) => {
    const at=[
        {
            src:"images/paypal-brands.svg",
            label:"PayPal" ,
            id:"PayPal" ,
            name:"paymentMethod", 
            value:"PayPal" ,
        },
        {
            src:"images/stripe-brands.svg",
            label:"Stripe", 
            id:"Stripe" ,
            name:"paymentMethod", 
            value:"Stripe" ,
        },

        {
            src:"images/cc-visa-brands.svg",
            label:"Credit/Debit Cards" ,
            id:"Credit/Debit Cards" ,
            name:"paymentMethod" ,
            value:"Credit/Debit Cards" ,
        },
        {
            src:"images/apple-pay-brands.svg",
            label:"Apple Pay" ,
            id:"apple-pay" ,
            name:"paymentMethod", 
            value:"Apple-Pay",

        },
        {
            src:"images/amazon-pay-brands.svg",
            label:"Amazon-Pay" ,
            id:"azp" ,
            name:"paymentMethod" ,
            value:"Amazon-Pay" ,
        },

        {
            src:"images/google-pay-brands.svg",
            label:"Google-Pay" ,
            id:"gp" ,
            name:"paymentMethod" ,
            value:"Google-Pay" ,
        }
    ]
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
  

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }


    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 act2/>
            <h1>
                Payment Method
            </h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Payment Method
                    </Form.Label>

                    
       
                    {/* <Row>
                        <Col md={1}>
                            <span style={{fontSize:"30px"}}>
                                <i class="fab fa-paypal"></i>
                            </span>
                        </Col>
                        <Col>
                             <Form.Check 
                                type="radio" 
                                label="PayPal" 
                                id="PayPal" 
                                name="paymentMethod" 
                                value="PayPal" 
                                checked 
                                onChange={(e)=> setPaymentMethod(e.target.value)}>
                        
                            </Form.Check>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1}>
                            <span style={{fontSize:"30px"}}>
                                <i class="fab fa-stripe"></i>
                            </span>
                        </Col>
                        <Col>
                            <Form.Check 
                            type="radio" 
                            label="Stripe" 
                            id="Stripe" 
                            name="paymentMethod" 
                            value="Stripe" 
                            onChange={(e)=> setPaymentMethod(e.target.value)}>

                            </Form.Check>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1}>
                            <span style={{fontSize:"30px"}}>
                                <i class="fab fa-cc-visa"></i>
                            </span>
                        </Col>
                        <Col>
                        <Form.Check 
                        type="radio" 
                        label="Credit/Debit Cards" 
                        id="Credit/Debit Cards" 
                        name="paymentMethod" 
                        value="Credit/Debit Cards" 
                        onChange={(e)=> setPaymentMethod(e.target.value)}>

                        </Form.Check>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={1}>
                            <span style={{fontSize:"30px"}}>
                                <i class="fab fa-apple-pay"></i>
                            </span>
                        </Col>
                        <Col>
                        
                        <Form.Check 
                        type="radio" 
                        label="Apple Pay" 
                        id="apple-pay" 
                        name="paymentMethod" 
                        value="Apple-Pay" 
                        onChange={(e)=> setPaymentMethod(e.target.value)}>

                        </Form.Check>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1}>
                            <span style={{fontSize:"30px"}}>
                                <i class="fab fa-amazon-pay"></i>
                            </span>
                        </Col>
                        <Col>
                            <Form.Check 
                            type="radio" 
                            label="Amazon-Pay" 
                            id="azp" 
                            name="paymentMethod" 
                            value="Amazon-Pay" 
                            onChange={(e)=> setPaymentMethod(e.target.value)}>

                            </Form.Check>
                        </Col>
                    </Row> */}

            
                    <Row className="justify-content-md-between">
                    {at.map((it) => (
                        <Col className="col-lg-4 mb-3 d-flex align-items-stretch">
                            <Card border="primary" >
                                <Card.Img style={{width:"50%", height:"50%"}} variant="top" src={it.src} fluid className="m-5" />
                                <Container>
                                    <Card.Body>
                                        <Form.Check
                                        type="radio" 
                                        label={it.label}
                                        id={it.id}
                                        name={it.item}
                                        value={it.value}
                                        onChange={(e)=> setPaymentMethod(e.target.value)}>
                                        </Form.Check>
                                       
                                    
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Col>
                    ))}
                    </Row>

          
                    
                </Form.Group>
                    <Button type='submit' variant='primary' className='mt-3'>
                        Continue
                    </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
