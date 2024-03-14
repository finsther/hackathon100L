import jwt from 'jsonwebtoken';

import CryptManager from '../../lib/crypt.js';
import User from '../../models/User.js';

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Email is not registered" });
    }

    const crypt = new CryptManager();
    const passwordMatch = await crypt.comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect credentials" });
    }

    const jwtoken = jwt.sign({ userId: user._id }, "SUPER_SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({ jwtoken });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};

export default loginUser;
