// ./app/homepage/addProduct/AddProduct.js
'use client'
import { useRouter } from "next/navigation"; // Use useRouter for client-side navigation
import React, { useState } from 'react';
import Link from 'next/link';
function AddProduct() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData); // This will log the form data

        // Navigate to the other page with form data as query parameters
        router.push({
            pathname: '/homepage/viewProduct',
            query: formData
        });
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    />
                </div>
                <Link href={{ pathname: '/homepage/viewProduct', query: formData }} >
                    AddProduct
                </Link>
            </form>


            <p>{formData.description}</p>
        </div>
    );
}

export default AddProduct;
