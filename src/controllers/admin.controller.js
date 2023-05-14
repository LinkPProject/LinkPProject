const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;
exports.createAdmin = (req, res) => {
  console.log("Reaching Here")

    if (!req.body.name) {
        res.status(400).send({
          message: "Name is Requuired"
        });
        return;
      }
    if (!req.body.email) {
        res.status(400).send({
          message: "Email is Requuired"
        });
        return;
      }
    if (!req.body.password) {
        res.status(400).send({
          message: "Password is Requuired"
        });
        return;
      }

    const admin = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  Admin.create(admin)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error Occured while creating a admin user."
      });
    });
  
};
