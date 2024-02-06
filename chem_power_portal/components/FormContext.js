import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: ''
    });

    const updateFormData = (name, value) => {
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const resetFormData = () => {
        setFormData({
            name: '',
            description: '',
            quantity: ''
        });
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
            {children}
        </FormContext.Provider>
    );
};