import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {

    const products = useSelector(state => state.cart);

    const dispatch = useDispatch()


    const removeToCart =(id)=>{
        dispatch(remove(id));
    }

    const carts = products.map(product => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price} Rs
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={()=> removeToCart(product.id)}variant="danger">Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div>
            {carts}
        </div>
    );
};

export default Cart;