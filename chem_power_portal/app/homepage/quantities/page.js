
'use client'
import { useState } from 'react';
import Barrel from '../../../components/Barrel';

const Quantity = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [quantities, setQuantities] = useState([10, 10, 10, 10, 10]);

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleRemoveFluid = (index) => {
        const newValue = parseInt(inputValues[index]);
        if (isNaN(newValue)) return;
        if (newValue > quantities[index]) {
            alert('Input cannot be greater than the current quantity');
            return;
        }
        const newQuantities = [...quantities];
        newQuantities[index] = quantities[index] - newValue;
        setQuantities(newQuantities);
        setInputValues(['', '', '', '', '']);
    };

    return (
        <div className="container">
            <h1>Barrel Inventory Management</h1>
            <div className="barrel-container">
                {quantities.map((quantity, index) => (
                    <div key={index}>
                        <Barrel
                            capacity={10}
                            initialQuantity={quantity}
                            onRemoveFluid={(value) => handleInputChange(index, value)}
                            label={getLabel(index)}
                        />
                        <input
                            type="number"
                            value={inputValues[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            placeholder="Enter quantity to remove"
                            style={{ color: 'black' }}
                        />
                        <button onClick={() => handleRemoveFluid(index)}>Remove</button>
                        <div className="label">{getLabel(index)}</div>
                    </div>
                ))}
            </div>
            <button onClick={() => setQuantities([10, 10, 10, 10, 10])}>Reset</button>
            <button onClick={() => setQuantities([5, 7, 3, 9, 2])}>Randomize</button>
            <style jsx>{`
                .container {
                    text-align: center;
                    margin-top: 50px;
                }
                .barrel-container {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }
                input {
                    margin-top: 10px;
                    width: 80px;
                    padding: 5px;
                    text-align: center;
                }
                button {
                    margin-top: 5px;
                    padding: 5px 10px;
                    background-color: #4CAF50; /* Green */
                    border: none;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    cursor: pointer;
                }
                .label {
                    margin-top: 5px;
                }
            `}</style>
        </div>
    );
};

export default Quantity;


const getLabel = (index) => {
    switch (index) {
        case 0:
            return 'Amino Phenol';
        case 1:
            return '3 Pentaone';
        case 2:
            return 'Diethyl Ketone';
        case 3:
            return 'Ethoy Phenol';
        case 4:
            return 'Para Chloro Cresol';
        default:
            return '';
    }
};
