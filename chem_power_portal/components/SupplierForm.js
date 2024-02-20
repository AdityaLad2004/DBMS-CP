// components/SupplierForm.js

import React, { useState } from 'react';

const SupplierForm = ({ onSubmit, initialValues }) => {
    const [supplierData, setSupplierData] = useState(initialValues || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData({ ...supplierData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(supplierData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Supplier Name:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    value={supplierData.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                    Contact Details:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    type="text"
                    name="contact"
                    value={supplierData.contact || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentTerms">
                    Payment Terms:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paymentTerms"
                    type="text"
                    name="paymentTerms"
                    value={supplierData.paymentTerms || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliverySchedule">
                    Delivery Schedule:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="deliverySchedule"
                    type="text"
                    name="deliverySchedule"
                    value={supplierData.deliverySchedule || ''}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
            </button>
        </form>
    );
};

export default SupplierForm;
