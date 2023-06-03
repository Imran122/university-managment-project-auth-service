import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parse data
app.get('env')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  next('server error')
})
//global error handeler
app.use(globalErrorHandler)
export default app
