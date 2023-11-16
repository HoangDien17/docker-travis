
import mongoose from "mongoose";
import config from "config";

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(config.get('database.url'))
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

export default new Database();