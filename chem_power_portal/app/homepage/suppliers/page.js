// pages/supplier-management.js
"use client"
import React, { useState } from 'react';
import SupplierForm from '../../../components/SupplierForm';
import SupplierTable from '../../../components/SupplierTable';

const SupplierManagement = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [editingSupplier, setEditingSupplier] = useState(null);

    const handleSubmit = (data) => {
        if (editingSupplier) {
            const updatedSuppliers = suppliers.map(supplier =>
                supplier === editingSupplier ? { ...supplier, ...data } : supplier
            );
            setSuppliers(updatedSuppliers);
            setEditingSupplier(null);
        } else {
            setSuppliers([...suppliers, data]);
        }
    };

    const handleEdit = (supplier) => {
        setEditingSupplier(supplier);
    };

    return (
        <div>
            <h1>Supplier Management</h1>
            <SupplierForm onSubmit={handleSubmit} initialValues={editingSupplier} />
            <SupplierTable suppliers={suppliers} onEdit={handleEdit} />
        </div>
    );
};

export default SupplierManagement;
