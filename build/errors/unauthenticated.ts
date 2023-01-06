import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'
interface UnAuthenticatedError {
    statusCode:number
}

class UnAuthenticatedError extends CustomAPIError {
  constructor(message:string) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default UnAuthenticatedError