import express from 'express'
const errorHandlerMiddleware = (err:Error,req:express.Request,res:express.Response,next:express.NextFunction) => {
    console.log(err)
    res.status( 500).json({msg:'there was an error'})
}

export default errorHandlerMiddleware