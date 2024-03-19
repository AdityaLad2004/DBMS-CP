
import { useState, useEffect } from 'react';

const Barrel = ({ capacity, initialQuantity, onRemoveFluid, label }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const remainingQuantity = capacity - quantity;

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const newQuantity = initialQuantity - value;
            onRemoveFluid(newQuantity);
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="barrel">
            <div className="fill" style={{ height: `${(quantity / capacity) * 100}%` }} />
            <div className="remaining">Remaining: {remainingQuantity}L</div>

            <input
                type="number"
                value={quantity}
                onChange={handleChange}
                placeholder="Enter quantity to remove"
            />
            <div className="label">{label}</div>
            <style jsx>{`
                .barrel {
                    position: relative;
                    width: 100px;
                    height: 200px;
                    background-color: #8B4513; /* Brown */
                    border-radius: 10px;
                    overflow: hidden;
                    margin: 20px;
                }
                .fill {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    background-color: #1E90FF; /* Dodger Blue */
                    transition: height 0.5s ease; /* Animation duration */
                }
                .remaining {
                    text-align: center;
                    color: white;
                    margin-top: 5px;
                }
                .label {
                    text-align: center;
                    color: white;
                    margin-top: 5px;
                    font-size: 12px;
                }
                input {
                    width: 100%;
                    margin-top: 10px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Barrel;
