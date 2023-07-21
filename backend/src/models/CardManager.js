const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "card" });
  }

  insert(card) {
    return this.database.query(
      `insert into ${this.table} (title, card_title,name,url, type,card_subtitle,card_detailed_text,id_topic ) values (?,?,?,?,?,?,?,?)`,
      [
        card.title,
        card.card_title,
        card.name,
        card.url,
        card.type,
        card.card_subtitle,
        card.card_detailed_text,
        card.id_topic,
      ]
    );
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
