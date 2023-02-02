import "express-async-errors";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index";
import attachCookie from "../utils/attachCookie";
import User from "../models/User";

interface Register {
  name: string;
  email: string;
  password: string;
}
interface Compare {
  comparePassword: any;
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
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

const login = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  attachCookie(res, token);
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user });
};

const updateUser = async (req: Request, res: Response) => {
  res.send("updateUser");
};
const logout = async (req:Request, res:Response) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
export { register, login, updateUser, logout };
