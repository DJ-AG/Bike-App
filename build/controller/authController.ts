import express from 'express'
import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
 
const register = async (req:express.Request, res:express.Response, next:express.NextFunction) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.OK).json({user});
  } catch (error) {
    next(error)
  }
};
const login = async (req:express.Request, res:express.Response) => {
  res.send('login user');
};
const updateUser = async (req:express.Request, res:express.Response) => {
  res.send('updateUser');
};
 
export{register, login, updateUser};
