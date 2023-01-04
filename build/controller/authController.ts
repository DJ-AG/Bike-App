import express from "express";

const register =  (req:express.Request, res:express.Response) => {
  res.send('register user')
}

const login =  (req:express.Request, res:express.Response) => {
  res.send('login user')
}

const updateUser =  (req:express.Request, res:express.Response) => {
  res.send('update user')
}

export { register, login, updateUser }
