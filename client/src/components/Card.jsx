import React from 'react'
import flowerImg from '../assets/Images/flowerpot_sec2 img.png';
import { LiaCartArrowDownSolid } from "react-icons/lia";

import { useNavigate } from "react-router-dom";

const Card = ({ Scientific_name, Price, Common_Name, ImageOnClick , onCart, OnBuyNow}) => {
    return (
        <div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-md p-4 hover:shadow-2xl">
            <img className="mx-auto w-48 h-48 rounded-full" src={flowerImg} alt="Planet" onClick={ImageOnClick}/>

            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-2">{Common_Name}</div>
                <hr className="border-gray-300 my-2" />
                <p className="text-gray-500 italic mb-2">{Scientific_name}</p>
                <p className="text-gray-700 font-bold text-xl mb-2">₹{Price}</p>
                <div className="flex justify-center space-x-4">
                    <button 
                        onClick={OnBuyNow}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        Buy Now
                    </button>
                    <button 
                    onClick={onCart}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        <LiaCartArrowDownSolid 
                            size={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card