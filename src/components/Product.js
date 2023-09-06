import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice'


const Product = () => {

    const dispatch = useDispatch();

    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, []);


    if (status === 'loading') {
        return <p>Loading...</p>
    };

    if (status === 'error') {
        return <p>Try again later</p>
    };


    const addToCart = (product) => {
        dispatch(add(product))
    }


    const carts = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
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
                    <Button onClick={() => addToCart(product)} variant="primary">Add To Card</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Deshboard</h1>
            <div className="row">
                {carts}
            </div>
        </>
    );
};

export default Product;