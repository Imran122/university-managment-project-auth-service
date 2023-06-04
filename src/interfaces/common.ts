import { IGenericErrorMessage } from './error'

export type IGenericErrorRespond = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}
