const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");

router.get("/me", function (req, res, next) {
  // res.send("respond with a resource");
  UserModel.findById(req.session.currentUser)
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// router.get("/:id", (req, res, next) => {
//   UserModel.findById(req.params.id)
//     .then((userDocument) => {
//       res.status(200).json(userDocument);
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

router.patch("/me", (req, res, next) => {
  UserModel.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
