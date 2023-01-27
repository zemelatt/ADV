const express = require("express");
const router = express.Router();

const {
  register,
  login,
  addAdventure,
  Updating,
  deleteAdv,
} = require("../routecontrol/routeControl");

router.post(register);
router.post(login);
router.post(addAdventure);
router.put(Updating);
router.delete(deleteAdv);

module.exports = router;
