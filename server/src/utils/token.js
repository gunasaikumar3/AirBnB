import jwt from "jsonwebtoken";
import crypto from "crypto";

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_EXP = process.env.ACCESS_TOKEN_EXP;
const REFRESH_EXP = process.env.REFRESH_TOKEN_EXP;

function signAccess(payload) {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXP });
}
function signRefresh(payload) {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXP });
}
function verifyAccess(token) {
  return jwt.verify(token, ACCESS_SECRET);
}
function verifyRefresh(token) {
  return jwt.verify(token, REFRESH_SECRET);
}

function genRefreshId() {
  return crypto.randomBytes(32).toString("hex"); // rid
}

export { signAccess, signRefresh, verifyAccess, verifyRefresh, genRefreshId };
