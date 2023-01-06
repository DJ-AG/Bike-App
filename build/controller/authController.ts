import express from 'express'
import User from '../models/User.js';
 
const register = async (req:express.Request, res:express.Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({user});
  } catch (error) {
    res.status(500).json({msg: 'there was an error'});
  }
};
const login = async (req:express.Request, res:express.Response) => {
  res.send('login user');
};
const updateUser = async (req:express.Request, res:express.Response) => {
  res.send('updateUser');
};
 
export{register, login, updateUser};
