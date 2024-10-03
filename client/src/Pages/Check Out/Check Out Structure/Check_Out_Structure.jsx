import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CheckOutStructure = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const productData = location.state;

    const card_data = productData.cart


    const [shippingOption, setShippingOption] = useState('normal');
    const [totalPrice, setTotalPrice] = useState(0); // State for total price

    const basePrice = card_data.reduce((total, product) => {
        const price = parseInt(product.price, 10);
        return isNaN(price) ? total : total + price;
    }, 0);

    useEffect(() => {
        const updatedTotalPrice = shippingOption === 'express' ? basePrice + 50 : basePrice;
        setTotalPrice(updatedTotalPrice);
    }, [shippingOption, basePrice]);

    const handleShippingChange = (event) => {
        setShippingOption(event.target.value);
    };

    const handleOnPay = () => {
        const newProductData = {
            productData: card_data,
            totalPrice
        };
        navigate('/payment', { state: newProductData });
    };

    return (
        <div className="flex">
            <div className="w-2/3 p-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Items</h2>
                    {card_data.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 m-2">
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.common_name}
                                        className="w-[120px] h-[120px] object-cover rounded-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{product.common_name}</h3>
                                    <p className="text-gray-500">{product.scientific_name}</p>
                                    <p className="text-gray-500">₹ {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <div className="text-sm text-gray-600">
                            Visa, Mastercard, American Express or Discover accepted.
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                            If you have purchased a subscription: By clicking "Check out,"
                            you agree to our Shop Policy, Privacy Policy and Terms & Conditions.
                            Your subscription will continue automatically, and you will be
                            charged the total subscription amount set forth above each month,
                            unless you cancel your subscription. You can cancel by calling
                            Customer Service at 1-555-555-5555 Monday through Friday 8 a.m. to
                            5 p.m. ET. All changes must be processed 48 hours prior to the
                            scheduled order date.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Order summary</h3>
                        {card_data.map((product, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4 m-2">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.image}
                                            alt={product.common_name}
                                            className="w-[120px] h-[120px] object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">{product.common_name}</h3>
                                        <p className="text-gray-500">{product.scientific_name}</p>
                                        <p className="text-gray-500">₹ {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <ul className="mt-2">
                            <li className="flex justify-between py-2">
                                <div className="font-medium">Subtotal:</div>
                                <div className="text-right">₹ {basePrice}</div>
                            </li>
                            <li className="flex justify-between py-2">
                                <div className="font-medium">Shipping:</div>
                                <div>
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2"
                                            name="shippingSelection"
                                            type="radio"
                                            value="normal"
                                            checked={shippingOption === 'normal'}
                                            onChange={handleShippingChange}
                                        />
                                        <label className="text-sm">Normal</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2"
                                            name="shippingSelection"
                                            type="radio"
                                            value="express"
                                            checked={shippingOption === 'express'}
                                            onChange={handleShippingChange}
                                        />
                                        <label className="text-sm">Express</label>
                                    </div>
                                </div>
                            </li>
                            <li className="flex justify-between py-2 font-bold">
                                <div>Order total:</div>
                                <div>₹ {totalPrice}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a className="text-green-500 hover:underline" href="#" alt="continue shopping">Continue Shopping</a>
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            onClick={handleOnPay}
                        >
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutStructure;

