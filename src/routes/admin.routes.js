const router = require('express').Router();
const adminController = require("../controllers/admin.controller.js");

router.route('/register').post(adminController.createAdmin);

module.exports = router;

