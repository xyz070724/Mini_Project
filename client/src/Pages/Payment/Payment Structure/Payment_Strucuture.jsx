import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode'; // Import QRCode library

const PaymentStructure = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const newProductData = location.state;

    console.log(newProductData);


    const plantData = newProductData.productData;

    const [paymentMethod, setPaymentMethod] = useState('card'); // Default to UPI
    const [showCardDetails, setShowCardDetails] = useState(true); //false if UPI error gets solve
    const [qrCodeGenerated, setQrCodeGenerated] = useState(false);

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
        if (e.target.value === 'card') {
            setShowCardDetails(true);
        } else {
            setShowCardDetails(false);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     if (paymentMethod === 'upi') {
    //         try {
    //             const amount = newProductData.totalPrice;
    //             await generateUPIQRCode(amount);
    //         } catch (error) {
    //             console.log('error in upi', error);

    //         }
    //     } else if (paymentMethod === "card"){
    //         try {
    //             alert("Payment done")
    //         } catch (error) {
    //             console.log("error in card", error);

    //         }
    //     }
    // };

    const onCardSubmit = () => {
        navigate("/")
    }

    // Function to generate UPI QR code
    const generateUPIQRCode = async (amount) => {
        try {
            const upiURL = `upi://pay?pa=omgfootballer123-1@oksbi&pn=Arboretum Plants Store&am=${amount}&cu=INR&tn=Payment for plants`;
            const canvas = await QRCode.toCanvas(document.getElementById('qrcode'), upiURL);
            setQrCodeGenerated(true);
        } catch (error) {
            console.error('Error generating UPI QR code:', error);
            // Handle error if necessary
        }
    };

    return (
        <>
            <div className='grid grid-cols-2 gap-8 w-full h-[600px] place-items-center'>

                {/* BILLING FORM */}
                <div className='flex flex-col w-full h-[600px] justify-center items-center'>
                    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Billing & Payment Details</h2>
                        <form className="space-y-4">

                            {/* Phone Number Input */}
                            <div>
                                <label className="block text-sm font-medium text-green-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    required
                                    pattern="\d{10}"
                                    className="mt-1 block w-full border border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                                />
                            </div>

                            {/* Payment Method Selection */}
                            <div>
                                <h3 className="text-lg font-medium text-green-700">Select Payment Method</h3>
                                <div className="space-y-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={paymentMethod === 'upi'}
                                            onChange={handlePaymentChange}
                                            className="form-radio text-green-600"
                                        />
                                        <span className="ml-2">UPI Payment</span>
                                    </label>
                                    <label className="ml-2 inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={handlePaymentChange}
                                            className="form-radio text-green-600"
                                        />
                                        <span className="ml-2">Card Payment</span>
                                    </label>
                                </div>
                            </div>

                            {/* Card Details (conditionally shown) */}
                            {showCardDetails && (
                                <><div className="card-details">
                                    <label className="block text-sm font-medium text-green-700">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Enter your card number"
                                        required
                                        pattern="\d{16}"
                                        className="mt-1 block w-full border border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2" />

                                    <label className="block text-sm font-medium text-green-700 mt-4">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        required
                                        pattern="(0[1-9]|1[0-2])\/\d{2}"
                                        className="mt-1 block w-full border border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2" />

                                    <label className="block text-sm font-medium text-green-700 mt-4">CVV</label>
                                    <input
                                        type="password"
                                        name="cvv"
                                        placeholder="Enter CVV"
                                        required
                                        pattern="\d{3}"
                                        className="mt-1 block w-full border border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2" />
                                </div>

                                    <button
                                        type="submit"
                                        onClick={() => onCardSubmit()}
                                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-150 mt-5"
                                    >
                                        Pay Now
                                    </button>
                                </>


                            )}
                        </form>


                        {/* QR Code
                        <div id="qrcode" className="qr-code mt-6" style={{ display: qrCodeGenerated ? 'block' : 'none' }}>
                            dafdsaf
                        </div>

                        {/* Submit Button */}
                        {/* <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-150 mt-5"
                        >
                            Pay Now
                        </button> */}

                    </div>
                </div>

                {/* CART */}
                <div className="flex flex-col justify-start items-start shadow-xl p-10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                    {plantData.map((data) => (
                        <div className="flex-col items-center">
                            <div className='flex mb-2 gap-2 p-5 shadow-lg rounded-xl'>
                                <div className="flex">
                                    <img
                                        src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?cs=srgb&dl=pexels-akilmazumder-1072824.jpg&fm=jpg"
                                        alt="Plant"
                                        className="w-12 h-12 object-cover rounded-full" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm font-semibold">{data.common_name}</h3>
                                    <p className="text-sm text-gray-500">{data.scientific_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex gap-5 mt-5'>
                        <div className='ml-2 font-semibold text-md'>Total Price:</div>
                        <div className="text-green-800 font-semibold ml-5">₹ {newProductData.totalPrice}</div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentStructure;
