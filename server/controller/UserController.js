import { User } from "../model/UserSchema.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    return console.log("Cannot generate accessToken and refreshToken", error);

  }
};

// Function to create User
const registerUser = async (req, res) => {
  try {
    // get user details
    const { username, email, fullname, password } = req.body;

    // validation
    if (!username || !email || !fullname || !password) {
      return res.status(200).json({ message: "All fields are required" });
    }

    // check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    // create user object
    const user = await User.create({
      fullname,
      email,
      password,
      username: username ? username.toLowerCase() : username,
    });

    // remove password and token from response
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    // check for user creation
    if (!createdUser) {
      return res.status(200).json({ message: "Couldn't register user" });
    }

    // return response
    return res.status(201).json({ message: "User registered" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const loginUser = async (req, res) => {
  try {
      // get data from req body
      const { email, password } = req.body;

      if (!email) {
          return res.status(400).json({ message: "Email is required" });
      }

      // find user
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ message: "User does not exist" });
      }

      // check password
      const passwordValid = await user.isPasswordCorrect(password);

      if (!passwordValid) {
          return res.status(400).json({ message: "Invalid Password" });
      }

      // access and refresh token
      const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

      const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

      // send cookie
      const options = {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // set to true in production
      };

      return res
          .status(200)
          .cookie("accessToken", accessToken, options)
          .cookie("refreshToken", refreshToken, options)
          .json({
              message: "User logged in Successfully",
              user: loggedInUser,
              accessToken,
              refreshToken,
          });
  } catch (error) {
      console.log("Error during login:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
};


const logoutUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(
      req.user._id,
      {
        $set: {
          refreshToken: undefined,
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(200, {}, "User loged out");
  } catch (error) {
    console.log(error);

  }
};

export { registerUser, loginUser, logoutUser };
