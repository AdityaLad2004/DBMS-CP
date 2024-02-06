"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import AddProduct from '../addProduct/page';
function AnotherPage() {
    const router = useRouter();
    const { name, description, quantity } = router.query || {};

    return (
        <div>
            <h1>Product Details</h1>
            <p className='text-white'>Name: {name}</p>
            <p className='text-white'>Description: {description}</p>
            <p className='text-white'>Quantity: {quantity}</p>
        </div>
    );
}

export default AnotherPage;
