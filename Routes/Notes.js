const express = require("express");
const router = express.Router();
const Note = require("../Models/Notes");
const Fetchuser = require("../Middleware/Fetchuser");

// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser". Login required
router.get("/fetchallnotes",Fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
});

module.exports = router;
