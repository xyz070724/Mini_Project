import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../Constant.jsx';
import Heading from '../../../components/Heading.jsx';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card';
import { CartContext } from '../../Cart/CartContext.jsx';

const Product_Card_Grid = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [plantData, setPlantData] = useState([]);

  const fetchPlantData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}plant/getPlant`);
      const responseData = response.data;

      if (Array.isArray(responseData)) {
        setPlantData(responseData.slice(0, 6));
      } else {
        setPlantData([responseData]); 
      }
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  const handleOnButtonClick = (productData) => {
    console.log('Product data:', productData);
    navigate('/product_description', { state: productData });
  };

  const handleOnBuyNow = (productData) => {
    navigate('/check_out', { state: productData });
  }

  const handleAddToCart = (productData) => {
    addToCart(productData); 
    navigate('/cart', { state: productData }); 
  };


  useEffect(() => {
    fetchPlantData();
  }, []);

  return (
    <>
      <Heading />
      <div className="grid grid-cols-3 gap-5  p-30px place-items-center">
        {plantData.map((data) => (
          <Card
            key={data.id} 
            ImageOnClick={() => handleOnButtonClick(data)}
            onCart={() => handleAddToCart(data)}
            OnBuyNow={() => handleOnBuyNow(data)}
            Common_Name={data.common_name}
            Scientific_name={data.scientific_name}
            Price={data.price}
          />
        ))}
      </div>
    </>
  );
};

export default Product_Card_Grid;
