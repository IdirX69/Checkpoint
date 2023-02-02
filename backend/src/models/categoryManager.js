const AbstractManager = require("./AbstractManager");

class categoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [category.name]
    );
  }

  find(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [category.name, category.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}
module.exports = categoryManager;
