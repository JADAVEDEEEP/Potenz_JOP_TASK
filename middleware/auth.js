const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log("TOKEN:", token);

    if (!token) {
      return res.status(400).json({
        message: "Token not found",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT ERROR:", err.message);

        return res.status(401).json({
          message: "Invalid or expired token",
        });
      }

      console.log("DECODED:", decoded);

      req.UserId = decoded.userId;

      console.log("USER ID:", req.UserId);

      next();
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = protect;