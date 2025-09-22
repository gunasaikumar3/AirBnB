// utils/password.js
const argon2 = require("argon2");

async function hashPassword(plain) {
  return await argon2.hash(plain, { type: argon2.argon2id });
}

async function verifyPassword(hash, plain) {
  return await argon2.verify(hash, plain);
}
module.exports = { hashPassword, verifyPassword };
