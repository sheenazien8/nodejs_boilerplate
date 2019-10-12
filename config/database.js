import dotenv from "dotenv"
import mysql from "mysql"
dotenv.config()
const connection = {
  mysql(){
    let connection = mysql.createConnection({
      host     : process.env.DB_HOST,
      user     : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    });
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      console.log('connected as id ' + connection.threadId);
    });
  }
}

export default connection
