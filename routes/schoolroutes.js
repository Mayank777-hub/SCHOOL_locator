const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 50 
});

router.use(limiter);
const {addSchool } = require("../controllers/schoolapi1");
const {getNearbySchools } = require("../controllers/schoollist");

router.post("/addSchool", addSchool);
router.get("/listSchools", getNearbySchools);
app.get("/test", (req, res) => {
  res.json({ message: "API work fine" });
});

module.exports = router;