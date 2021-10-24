const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get the token
  const token = req.query.token;
  // if token there is not token - A token is required
  if (!token) {
    return res.status(403).json({ message: "A token is required" });
  }
  // Verify the token
  try {
    const decoded = jwt.verify(token, "DEVZOID");
    console.log(decoded);

    if (decoded.role !== "freelancer" && decoded.role !== "user") {
      throw Error("You have no access to this route");
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  return next();
};

module.exports = verifyToken;
