import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interfaces/error'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ err: err })

  const statusCode = 500
  const message = 'someting went wrong'
  const errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidatorError') {
    const simplifiedError = handelValidationError(err)
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
