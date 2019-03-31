// Import MySQL connection.
const connection = require("./connection.js");



// Object for all our SQL statement functions.
const orm = {
  selectAll: (tableName, callback) => {
    let queryString = "SELECT * FROM ${tableName}" ;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  create: function(table, cols, vals, callback) {
    let queryString = 'INSERT INTO  ${table} (${cols}) values ("${vals}")'
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result)
    });
  },
  update: function(table, cols, vals, id, callback) {
    let queryString = 'UPDATE  ${table} set ${vals} = ${value} where id = ${id}'
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    })
  },

    delete: function(table, id, callback) {
      let queryString = 'DELETE FROM ${table} WHERE id = ${id}'
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    })

  }

}

// Export the orm object for the model (burger.js).
module.exports = orm;



