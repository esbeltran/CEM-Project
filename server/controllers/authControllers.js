import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, contactNo, type } = req.body;

    // check if user exists
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows > 0) {
      return res.status(401).send("User already exist");
    }

    // encrypt password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // insert user
    const newUser = await pool.query(
      "INSERT INTO users (user_email, user_password, first_name, last_name, contact_no, user_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, bcryptPassword, firstName, lastName, contactNo, type]
    );

    // generate JWT token
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("User does not exist");
    }

    // check if password is same as db password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password is incorrect");
    }

    // give the JWT token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const verify = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { register, verify, login };
