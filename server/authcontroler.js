const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.cookies.token;

  if (token !== undefined) {
    jwt.verify(token, "wknjkwbcjc", (err, decode) => {
      if (err) {
        console.log(err.message);
        res.send({ msg: "not allwed" });
      } else {
        // console.log("from auth" + JSON.stringify(decode));
        next();
      }
    });
  } else {
    res.send({ msg: "You have to login first" });
  }
};
module.exports = { auth };
