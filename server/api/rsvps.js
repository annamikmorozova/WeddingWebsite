const router = require("express").Router();
const {RSVP} = require("../db/models");

router.post("/", (req, res) => 
    RSVP.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        plusOneFirstName: req.body.plusOneFirstName,
        plusOneLastName: req.body.plusOneLastName,
        attendance: req.body.attendance
    }).then( (result) => res.json(result) )
  );

module.exports = router;