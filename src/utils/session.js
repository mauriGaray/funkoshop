const session = require("cookie-session");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

function initSession() {
  const secret = process.env.SESSION_SECRET || uuidv4();

  return session({
    secret: secret,
    resave: true, // Puedes ajustar según tus necesidades
    saveUninitialized: false, // Puedes ajustar según tus necesidades
  });
}
module.exports = {
  initSession,
};
