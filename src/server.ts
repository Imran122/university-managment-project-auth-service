import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`database conectted succesfully`)
    app.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error(`database conectted error: ${err}`)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
