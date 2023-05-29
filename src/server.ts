import mongoose from "mongoose";
import app from "./app";
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`database conectted succesfully`);
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`database conectted error: ${error}`);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();