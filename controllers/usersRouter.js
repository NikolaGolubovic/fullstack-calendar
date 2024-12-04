const router = require("express").Router();
const bcrypt = require("bcrypt");
// const { v4: uuidv4 } = require("uuid");
const db = require("../models/db");

router.get("/", (req, res) => {
  res.send("hello from router!");
});

router.post("/", async (req, res, next) => {
  try {
    // const id = uuidv4();
    const { username, password: rowPass } = req.body;
    const foundUsername = await db.query(
      "SELECT * FROM users WHERE users.username = $1",
      [username]
    );
    if (foundUsername.rows.length !== 0) {
      throw {
        message:
          "User with that name already exists, please choose another name",
      };
    }
    const saltRound = 10;
    const password = await bcrypt.hash(rowPass, saltRound);
    const newUser = await db.query(
      "INSERT INTO users(username, password) VALUES($1, $2) returning *",
      [username, password]
    );
    res.status(200).send(newUser.rows[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
