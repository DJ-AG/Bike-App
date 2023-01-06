import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index";
import User from "../models/User.js";

interface Register {
  name: string;
  email: string;
  password: string;
}
interface Login {
  email: string;
  password: string;
}

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password }: Register = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
};
const login = async (req: Request, res: Response) => {
  const { email, password }: Login = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
};
const updateUser = async (req: Request, res: Response) => {
  res.send("updateUser");
};

export { register, login, updateUser };
