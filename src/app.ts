import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parse data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('work successfully')
})

export default app
