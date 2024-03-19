

import React from 'react';

const SupplierTable = ({ suppliers, onEdit }) => {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Contact</th>
                    <th className="px-4 py-2">Payment Terms</th>
                    <th className="px-4 py-2">Delivery Schedule</th>
                    <th className="px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map((supplier, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="border px-4 py-2 text-black">{supplier.name}</td>
                        <td className="border px-4 py-2 text-black">{supplier.contact}</td>
                        <td className="border px-4 py-2 text-black">{supplier.paymentTerms}</td>
                        <td className="border px-4 py-2 text-black">{supplier.deliverySchedule}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(supplier)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SupplierTable;
