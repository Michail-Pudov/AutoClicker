const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

////Ручка для регистрации
router.post("/registration", async function(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let user = await User.findOne({ email: email });
  if (!user) {
    User.create({
      email: email,
      password: await bcrypt.hash(password, 10)
    });

    res.json({ registration: true });
  } else {
    res.json({ registration: false });
  }
});

////Ручка для авторизации
router.post("/login", async function(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let user = await User.findOne({ email: email });

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    res.json({ logIn: true });
  } else {
    res.json({ logIn: false });
  }
});

module.exports = router;
