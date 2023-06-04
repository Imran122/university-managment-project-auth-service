import mongoose from 'mongoose'
import { IGenericErrorRespond } from '../interfaces/common'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorRespond => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return { path: el.path as string, message: el.message }
    }
  )
  const statusCode = 400
  //return
  return {
    statusCode,
    message: 'Validaton error',
    errorMessages: errors,
  }
}

export default handleValidationError
