const express = require("express");
const teamsRouter = express.Router();

teamsRouter.post("/ourteams", async (req, res) => {
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

module.exports = teamsRouter;
