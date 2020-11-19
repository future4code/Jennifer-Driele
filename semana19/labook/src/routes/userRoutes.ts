import express from "express";
import createUser from "../controller/user/createUser";

export const userRouter = express.Router();

userRouter.post("/signup", createUser);