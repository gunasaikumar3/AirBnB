const User = require("../models/user.js");

module.exports.getUserData = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId).select("-passwordHash");

  res.json({ user });
};
