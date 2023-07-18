const AbstractManager = require("./AbstractManager");

class ThemeManager extends AbstractManager {
  constructor() {
    super({ table: "theme" });
  }

  insert(theme) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      theme.title,
    ]);
  }

  update(theme) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [theme.title, theme.id]
    );
  }
}

module.exports = ThemeManager;
