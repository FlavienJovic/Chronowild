const AbstractManager = require("./AbstractManager");

class TopicManager extends AbstractManager {
  constructor() {
    super({ table: "topic" });
  }

  insert(topic) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      topic.title,
    ]);
  }

  update(topic) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [topic.title, topic.id]
    );
  }

  findAllByTheme(id) {
    return this.database.query(
      `select * from  ${this.table} where id_theme = ?`,
      [id]
    );
  }
}

module.exports = TopicManager;
