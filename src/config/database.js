const mongoose = require('mongoose');
const { dbDatabase,dbHost,dbConnection,dbPort } = require('./config');

const connectDb = () => {
  //Set up default mongoose connection
  // var mongoDB = `${dbConnection}://${dbHost}:${dbPort}/${dbDatabase}`;
  var mongoDB = 'mongodb://mongo:27017/bcff';
  return mongoose.connect(mongoDB);
};

module.exports = {connectDb}
