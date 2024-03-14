const bcrypt = require("bcrypt");

class CryptManager {
  constructor() {
    this.saltRounds = 10;
  }

  async hashPassword(password) {
    try {
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);

      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }

  async comparePasswords(password, hashedPassword) {
    try {
      const result = await bcrypt.compare(password, hashedPassword);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CryptManager;
