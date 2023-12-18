const session = require("cookie-session");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

function initSession() {
  const secret = process.env.SESSION_SECRET || uuidv4();

  return session({
    name: "session",
    keys: [
      `${uuidv4()}`,
      `${uuidv4()}`,
      `${uuidv4()}`,
      `${uuidv4()}`,
      `${uuidv4()}`,
      `${uuidv4()}`,
      secret,
    ],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });
}
module.exports = {
  initSession,
};
