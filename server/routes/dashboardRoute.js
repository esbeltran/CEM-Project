import Router from "express";
import pool from "../config/db.js";
import auth from "../middleware/authorization.js";

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const user = pool.query(
      "SELECT first_name, last_name, user_type FROM users WHERE user_id = $1",
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

export default router;
