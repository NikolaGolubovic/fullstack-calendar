const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  if (!req.token) {
    return res.status(200).json({ events: [] });
  }
  const decoded = await jwt.verify(req.token, process.env.SECRET);

  if (!decoded || !decoded.id) {
    return res.status(404).send("Token is missing");
  }

  const events = await db.query(
    "SELECT events.id, event_text, event_time, date_key FROM events LEFT JOIN users ON events.user_id = users.id WHERE events.user_id = $1",
    [decoded.id]
  );

  res.status(200).json({ events: events.rows });
});

router.post("/", auth, async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.token, process.env.SECRET);
    if (!decoded || !decoded.id) {
      return res.status(404).send("Token is missing");
    }

    const { eventMsg, eventTime, dateKey } = req.body;
    const newEvent = await db.query(
      "INSERT INTO events(user_id, event_text, event_time, date_key) VALUES ($1, $2, $3, $4) returning *",
      [decoded.id, eventMsg, eventTime, dateKey]
    );

    res.json({ event: newEvent.rows[0] });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.token, process.env.SECRET);

    if (!decoded || !decoded.id) {
      return res.status(404).send("Token is missing");
    }
    const newEvent = await db.query(
      "UPDATE events  SET event_text = $1, event_time = $2 FROM users WHERE users.id = $3 AND date_key=$4 returning event_text, event_time, events.id, events.date_key",
      [req.body.event_msg, req.body.event_time, decoded.id, req.params.id]
    );
    res.send({ event: newEvent.rows[0] });
  } catch (err) {
    console.log("some error");
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.token, process.env.SECRET);
    console.log(req.body);
    if (!decoded || !decoded.id) {
      return res.status(404).send("Token is missing");
    }
    const findEvent = await db.query(
      "SELECT * FROM events WHERE events.id = $1",
      [req.params.id]
    );
    const userId = findEvent.rows[0].user_id;

    const removedUser = await db.query(
      "DELETE FROM events USING users WHERE users.id = $1 AND events.id = $2",
      [userId, req.params.id]
    );
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
