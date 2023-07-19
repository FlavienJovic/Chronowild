const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "card" });
  }

  insert(card) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      card.title,
    ]);
  }

  update(card) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [card.title, card.id]
    );
  }

  findAllCardsByTopic(id) {
    return this.database.query(
      `select * from  ${this.table} where id_topic = ?`,
      [id]
    );
  }
}

module.exports = CardManager;
