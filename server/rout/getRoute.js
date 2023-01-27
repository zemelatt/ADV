const express = require("express");
const router = express.Router();
const {
  allAdventure,
  logOut,
  getUpdatingfile,
} = require("../routecontrol/routeControl");

router.get(allAdventure);
router.get(logOut);
router.get(getUpdatingfile);

module.exports = router;
