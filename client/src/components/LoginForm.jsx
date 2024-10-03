import { React, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../Constant';

const LoginForm = () => {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState(""); 

  const LoginUser = async (event) => {
    event.preventDefault();

    try {
      const userData = await axios.post(`${BASE_URL}user/login`, User);

      console.log("Response from login API:", userData);

      if (userData && userData.data) {
        navigate('/', { state: userData.data }); 
      } else {
        alter("Incorrect credentials");
      }
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again."); 
      console.error("Login error:", error); 
    }
  }


  const GoToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <body className="bg-cover bg-center background-image:url('../assets/Images/background.png')">
        <div className="flex flex-col w-[500px] h-auto justify-center items-center bg-gradient-to-bl from-gray-300 via-gray-200 to-gray-100 shadow-xl rounded-lg">
          <form className="flex flex-col w-full justify-center items-center p-10" onSubmit={LoginUser}>
            <i
              className="flex w-20 h-20 rounded-full justify-center items-center text-white text-[60px] mb-8 bg-gradient-to-br from-green-300 via-green-500 to-green-700"
            >
              <FaRegUser className="p-2" />
            </i>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}

            <input
              id="email"
              value={User.email}
              onChange={(e) => setUser({ ...User, email: e.target.value })}
              type="text"
              required
              placeholder="Enter your Email"
              className="text-lg mb-3 px-5 py-2 border-green-500 border-2 bg-transparent rounded-full placeholder:text-gray-500 text-black"
            />

            <input
              id="password"
              value={User.password}
              onChange={(e) => setUser({ ...User, password: e.target.value })}
              type="password"
              required
              placeholder="Enter Password"
              className="text-lg mb-3 px-5 py-2 border-green-500 border-2 bg-transparent rounded-full placeholder:text-gray-500 text-black"
            />

            <div className="flex flex-row w-[235px] h-[50px] justify-center items-center gap-5
            border-green-500 border-2 rounded-full hover:bg-green-500 hover:text-white text-gray-700">
              <div>
                <button
                  type="submit" 
                  className="w-full text-lg">
                  LOGIN
                </button>
              </div>
              <div>
                <i>
                  <FaRightToBracket className="text-lg" />
                </i>
              </div>
            </div>

            <p
              onClick={GoToSignUp}
              className="mt-3 text-green-500 font-bold cursor-pointer hover:border-b-2 hover:border-green-500"
            >
              Haven't Sign Up Yet?
            </p>
          </form>
        </div>
      </body>
    </>
  );
};

export default LoginForm;
