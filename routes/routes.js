const express = require("express");

const router = express.Router();
const Model = require("../models/model");
module.exports = router;
//Post Method
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
router.get("/getAll",async (req, res) => {
  const findAllTasks = await Model.findAll() 

  res.status(200).json({
    data:findAllTasks,
    msg:"Tasks fetched Succesfully"
  })

});

//Get by ID Method
router.get("/getOne/:id", async(req, res) => {
  const id = req?.params
  const individualTask = await Model.findById(id); 
  res.status(200).json({
    data: individualTask,
    msg: "Tasks fetched Succesfully",
  });

});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
    const id = req?.params
    console.log(req.body);


  try {
  
    const dataToSave = await data.findOneAndUpdate({id:id},{
        name: req.body.name,
        age: req.body.age,
      });
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
