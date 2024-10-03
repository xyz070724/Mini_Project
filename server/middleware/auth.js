import { User } from "../model/UserSchema.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
    try {
      req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Beared ", "");
    
        if (!token) {
            return res.status(400).json({message: "Unauthorized token"})
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            return res.status(400).json({message: "Invalid access token"})
        }0
    
        req.user = user;
        next()
    } catch (error) {
        return res.status(400).json({message: "invalid token", error})

    }
  };