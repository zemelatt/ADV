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

  getOne,
  dislike,

  allAdventure,
  logOut,
  getUpdatingfile,
} = require("../routecontrol/routeControl");

router.put(Updating);
router.delete(deleteAdv);
//post request
router.post(like);
router.post(formatPassword);
router.post(resetPassword);
router.post(dislike);
router.post(numberOfhate);
router.post(register);
router.post(login);
router.post(addAdventure);
// get request
router.get(numberOfLike);
router.get(getOne);
router.get(allAdventure);
router.get(logOut);
router.get(getUpdatingfile);

//

module.exports = router;
