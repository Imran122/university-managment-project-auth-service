import cors from 'cors'
import express, { Application, Response } from 'express'

const app: Application = express()

app.use(cors())

//parse data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app.use("/api/v1", bookRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('work successfully')
})

export default app
