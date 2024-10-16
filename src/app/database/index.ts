'use server'

const moongoose = require("mongoose");

export const connectDB = async () => {
  return new Promise(async (resolve, reject) => {
    return await moongoose
    .connect(process.env.MONGODB_URI, {})
    .then((res: any) => {
      console.log("Connected to the database")
      return resolve(res)
    })
    .catch((error: any) => {
      console.log("Error while connecting to the database", error);
      return  reject(error)
    });
  })
};
