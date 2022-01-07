// Update with your config settings.
const path = require('path')
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '.', 'database.sqlite3')
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations'
  }
};
