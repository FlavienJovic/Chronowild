const AbstractManager = require("./AbstractManager");

class ThemeManager extends AbstractManager {
  constructor() {
    super({ table: "theme" });
  }

  insert(theme) {
    return this.database.query(
      `insert into ${this.table} (title, image) values (?, ?)`,
      [theme.title, theme.image]
    );
  }

  update(theme) {
    return this.database.query(
      `update ${this.table} set title = ? image = ? where id = ?`,
      [theme.title, theme.image, theme.id]
    );
  }
}

module.exports = ThemeManager;
