const orm = require("../config/orm.js");

 let burger = {
     all: function(callback) {
         orm.all("burgers", (result) => {
             callback(result)
         })
    },
    // Variables cols and val are arrays.
    create: (cols, vals, callback) => {
        orm.create("burgers", cols, vals, (result) => {
            callback(result);
    });
 },

 update: (objColVals, finish, callback) => {
     orm.update("burgers", objColVals, value, id, (result) => {
         callback(result);

     })
 },

 delete: (id, callback) => {
     orm.delete("burgers", id, (result) => {
     callback(result);

 });
 }

};

// Export database functions for the controller (burger_controllers.js).

module.exports = burger;
