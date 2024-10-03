import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Product_Page = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productData = location.state;

  const handleOnBuyNow = () => {
    navigate('/check_out', { state: productData });
  };

  return (
    <section className="bg-[#C9E8D7] text-gray-600 body-font overflow-hidden">
      <div className="flex w-full h-[550px] justify-center items-center">
        <div className="flex flex-wrap w-full justify-center items-center">
          <img alt="ecommerce" className="hover:w-[450px] hover:h-[450px ] w-[400px] h-[400px]" src="https://dummyimage.com/400x400" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest ml-1">वनज्ञानसेतु</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productData.common_name}</h1>
            <h2 className="text-lg title-font text-gray-800 tracking-widest mb-2 italic">{productData.scientific_name}</h2>
            <p className="leading-relaxed">{productData.taxonomic_description.description}</p>
            <h1 className="text-lg title-font text-gray-800 tracking-widest mt-2 font-semibold">Uses</h1>
            <p className="leading-relaxed">{productData.uses.description}</p>
            <div className="flex mt-5 justify-around">
              <p className="title-font font-medium text-2xl text-gray-900">Price: ₹ {productData.price}</p>
              <button 
                onClick={()=>handleOnBuyNow()}
                className="text-white border-0 py-2 px-6 focus:outline-none bg-green-500 hover:bg-green-700 rounded">
                  Buy Now
              </button>
              
              <button className="text-white border-0 py-2 px-6 focus:outline-none bg-green-500 hover:bg-green-700 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product_Page