const express = require("express");
const app = express();
const PORT = process.env.PORT || 5300;
const cors = require("cors");
app.use(express.json());

app.use(cors());

const schoolRoutes = require("./routes/schoolroutes");

app.get("/", (req, res) => {
  res.send("School API is running but rember sql server databased hosted locally");
});
app.use("/api", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});