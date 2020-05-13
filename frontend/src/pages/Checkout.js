import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, Container, Image, Button } from 'react-bootstrap'

const Checkout = ({ cart, dispatch, shippingAddress }) => {
    return (
        <div>
            <br />
            <Container style={{ textAlign: "left" }}>
                <h2>Review you order</h2>
                {
                    <div>
                    <ListGroup>
                        {cart.map((cartItem, i) =>
                            <ListGroup.Item key={i}>
                                <span>
                                    <Image
                                        src={require('../../../backend/images/' + cartItem.item.picture)}
                                        style={{ maxHeight: '100px', float: "left", marginRight: '10px' }}
                                    />
                                    {cartItem.item.title}<br />
                        Quantity: {cartItem.amount}
                                </span>
                            </ListGroup.Item>
                        )}
                    </ListGroup><br/>
                    <div>
                        Shipping Address: {" "}
                    </div><br/>
                    <div>
                        Payment method: {" "}
                    </div><br/>
                    <Button>Place your order</Button>
                </div>
                }
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.userReducer.cart
})

export default connect(mapStateToProps)(Checkout)
