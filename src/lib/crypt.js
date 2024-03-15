import bcrypt from 'bcrypt';

class CryptManager {
  constructor() {
    this.saltRounds = 10;
  }

  async hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);

    return hashedPassword;
  }

  async comparePasswords(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword);

    return result;
  }
}

export default CryptManager;
