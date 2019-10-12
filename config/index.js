import database from "./database";
switch (process.env.APP_DB_LIBRARY) {
  case 'mysql':
    database.mysql()
    break;
  default:
    // statements_def
    break;
}
export default {
  database
}
