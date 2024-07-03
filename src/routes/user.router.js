import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";

const router = Router();
router.route("/login").post(UserController.loginController);
export default router;
