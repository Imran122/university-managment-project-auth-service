import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError) => {
      return { path: el.path as string, message: el.message }
    }
  )
  const statusCode = 400
  //return
  return errors
}
