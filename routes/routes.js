const express = require("express");

const router = express.Router();
const Model = require("../models/model");
const UserModal = require("../models/User");
module.exports = router;
//Post Method
router.get("/info", (req, res) => {
  res.json({
    msg: "working successfully",
  });
});
router.post("/login", async (req, res) => {
  try {
    const ifUserExist = await UserModal.findOne({
      email: req?.body?.email,
      password: req?.body?.password,
    });
    if (ifUserExist) {
      res.status(200).json({
        msg: "loggedIn successfully",
      });
    } else {
      res.status(404).json({
        msg: "invallid request",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/signup", async (req, res) => {
  try {
    const data = new UserModal({
      name: req?.body?.name,
      email: req?.body?.email,
      dob: req?.body?.dob,
      password: req?.body?.password,
      profileImage: req?.body?.profileImage,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/post", async (req, res) => {
  console.log(req.body);

  try {
    const data = new Model({
      name: req.body.name,
      age: req.body.age,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Get all Method
router.get("/getAll", async (req, res) => {
  const findAllTasks = await Model.find();

  res.status(200).json({
    data: findAllTasks,
    msg: "Tasks fetched Succesfully",
  });
});

//Get by ID Method
router.get("/:id", async (req, res) => {
  const { id } = req?.params;

  const individualTask = await Model.findById(id);

  return res.status(200).json({
    data: individualTask,
    msg: "Tasks fetched Succesfully",
  });
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  const id = req?.params;
  console.log(req.body);

  try {
    const dataToSave = await data.findOneAndUpdate(
      { id: id },
      {
        name: req.body.name,
        age: req.body.age,
      }
    );
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
