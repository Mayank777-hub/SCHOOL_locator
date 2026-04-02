const express = require("express");
const app = express();
const PORT = process.env.PORT || 5300;
const cors = require("cors");
app.use(express.json());

app.use(cors());

const schoolRoutes = require("./routes/schoolroutes");
app.use("/api", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});