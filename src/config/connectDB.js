// import mysql from "mysql2"

// const pool = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     database: "nodejsbasic"
// })
// const poolPromise = pool.promise();
// export default poolPromise
import Sequelize from "sequelize"
const sequelize = new Sequelize('nodejs', 'root', null , {
    host: 'localhost',
    dialect:'mysql'
  });

  const connectDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  export default connectDB