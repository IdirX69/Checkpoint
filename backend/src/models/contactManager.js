const AbstractManager = require("./AbstractManager");

class contactManager extends AbstractManager {
  constructor() {
    super({ table: "contacts" });
  }

  insert(contact) {
    return this.connection.query(
      `insert into ${this.table} (name,email,phone_number,address,category_id,user_id) values (?,?,?,?,?,?)`,
      [
        contact.name,
        contact.email,
        contact.phone_number,
        contact.address,
        contact.category_id,
        contact.user_id,
      ]
    );
  }

  update(contact) {
    return this.connection.query(
      `update ${this.table} set name = ?, email = ?, phone_number = ?, address = ?, category_id = ? where id = ?`,
      [
        contact.name,
        contact.email,
        contact.phone_number,
        contact.address,
        contact.category_id,
        contact.id,
      ]
    );
  }
}

module.exports = contactManager;
