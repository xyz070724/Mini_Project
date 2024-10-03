import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controller/UserController.js";
import {verifyJWT} from "../middleware/auth.js"

const router = Router();

router.route("/register").post(registerUser);
 
router.route("/login").post(loginUser)

// secure routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router;
