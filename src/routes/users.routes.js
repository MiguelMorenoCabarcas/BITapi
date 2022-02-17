const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.post("/create-user", usersControllers.createUser);
router.delete("/delete-user/:userID", usersControllers.deleteUser);
router.get("/show-user", usersControllers.showUser);
router.put("/update-user/:userID", usersControllers.updateUser);

module.exports = router;
