import { Sequelize } from 'sequelize';
import dotenv from "dotenv"


dotenv.config()

export const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,  process.env.PASSWORD, {
    port: process.env.PORT ||3306,
    host:  process.env.HOST,
    dialect: "mysql",
});

const connectionDB = async () => {
  await sequelize.authenticate(); // Test the connection to the database

  return await sequelize.sync({ alter: false, force: false }).then((data) => {
      console.log('Connection has been established successfully.');
  }).catch((error) => {
      console.error('Unable to connect to the database:', error);
  });
}

export default connectionDB



