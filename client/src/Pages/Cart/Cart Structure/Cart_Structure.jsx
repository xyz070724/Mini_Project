import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';


const Cart_Structure = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    const location = useLocation();
    const productData = location.state;

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            const initialCart = cartItems.map(item => ({
                ...item,
                quantity: 1,
            }));
            setCart(initialCart);
        } else {
            setCart([]);
        }
    }, [cartItems]);

    const onClearCart = () => {
        setCart([]);
    }

    const onIncrement = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity++;
        setCart(updatedCart);
    }

    const onDecrement = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity--;
            setCart(updatedCart);
        }
    }

    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.price * product.quantity;
        });
        return total;
    }

    const handleOnBuyNow = (BuyNowData) => {
        const checkoutData = {
            cart: cart,
            otherData: BuyNowData,
        };
        navigate('/check_out', { state: checkoutData });
    }
    return (
        <>
            <div className="flex flex-col w-full h-full bg-center items-center p-[150px] mt-5">
                <div className="flex flex-col justify-center items-center bg-gradient-to-bl from-gray-300 via-gray-200 to-gray-100 shadow-xl rounded-lg w-[625px] h-auto  ">
                    <div className='p-1'>   </div>
                    <h1 className="text-3xl font-semibold">Cart Summary</h1>
                    <div className='flex flex-row w-[540px] justify-between items-center mb-2'>
                        <h3 className="text-lg font-medium mt-4">Total Amount: ₹ {calculateTotalAmount()}</h3>
                        <button
                            onClick={onClearCart}
                            className="text-green-500 border-[rgba(0,0,0,0.55)] border-[1px] w-[110px] h-[30px] rounded-full"
                        >
                            Clear Cart
                        </button>
                    </div>
                    {cart.length > 0 ? (
                        cart.map((product, index) => (
                            <div key={index} className="flex w-[550px] h-auto justify-center items-center p-2 shadow-lg rounded-lg mt-4">
                                <div className="flex flex-row w-full h-[50px] justify-between items-center gap-5">
                                    <div className="flex flex-row w-[100px] gap-5">
                                        <img
                                            src={product.image}
                                            alt={product.common_name}
                                            className="w-12 h-12 object-cover rounded-full"
                                        />
                                        <h3 className="text-sm font-semibold text-start">{product.common_name}</h3>
                                        <p className="text-[12px] text-gray-500">{product.scientific_name}</p>
                                    </div>
                                    <div className="flex flex-row gap-5 w-[330px] justify-end items-center">
                                        <button
                                            onClick={() => onIncrement(index)}
                                            className='bg-green-500 w-[35px] h-[20px] rounded-full flex justify-center items-center text-white'>+</button>
                                        <button
                                            onClick={() => onDecrement(index)}
                                            className='bg-green-500 w-[35px] h-[20px] rounded-full flex justify-center items-center text-white'>-</button>
                                    </div>
                                    <div className="justify-end text-right">₹ {product.price * product.quantity}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items in the cart</p>
                    )}

                    <div className="grid grid-cols-2 w-[550px] place-items-center mt-4">
                        <div>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            >
                                Continue Shopping
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleOnBuyNow(productData)}
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className='p-1'>   </div>

                </div>
            </div>
            {/* </body> */}
        </>
    );
};

export default Cart_Structure;
