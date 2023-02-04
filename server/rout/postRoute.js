const express = require("express");
const router = express.Router();

const {
  register,
  login,
  addAdventure,
  Updating,
  deleteAdv,
  like,
  formatPassword,
  resetPassword,
  noLike,
  getOne,
  dislike,
  deleteAdmin,
} = require("../routecontrol/routeControl");

router.post(register);
router.post(login);
router.post(addAdventure);
router.put(Updating);
router.delete(deleteAdv);
router.post(like);
router.post(formatPassword);
router.post(resetPassword);
router.get(numberOfLike);
router.get(getOne);
router.post(dislike);
router.post(numberOfhate);

//

module.exports = router;
