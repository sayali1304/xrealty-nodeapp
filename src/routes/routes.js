const express = require("express");
const router = express.Router();
const Activity = require("../models/agentActivity.model");
const verify = require("../middlewares/authVerify");

const activityController = require("../controllers/agentActivity.controller");

router.get("/getactivity", verify, async (req, res) => {
  activityController
    .getActivity()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.send(err));
});

router.post("/createactivity", verify, async (req, res) => {
  activityController
    .saveActivity(req.body)
    .then((data) =>
      res
        .status(200)
        .json({ details: data, message: "activity created successfully" })
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/updateactivity", verify, async (req, res) => {
  activityController
    .updateActivity(req.body)
    .then((data) =>
      res
        .status(200)
        .json({ details: data, message: "activity updated successfully" })
    )
    .catch((err) => res.status(500).send(err));
});

router.delete("/delateactivity", verify, async (req, res) => {
  activityController
    .deleteActivity(req.body.name)
    .then((data) => res.send("record deleted succefully"))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
