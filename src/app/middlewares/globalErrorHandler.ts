import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import ApiErrors from '../../errors/ApiError'
import handleValidationError from '../../errors/handelValidationError'
import { IGenericErrorMessage } from '../../interfaces/error'


const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ err: err })

  let statusCode = 500
  let message = 'someting went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidatorError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  }
  else if (error instanceof ApiErrors) {
    statusCode= error?.statusCode;
    message = error?.message;
    errorMessages = error?.message;
    [
      {
        path: '',
        message:error?.message
      }
    ]
  }
  else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?messages ? [{
      path: '',
      message:error?.message
}]:[]    
}
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
