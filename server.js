const express = require("express");
const app = express();
const PORT = 5300;
app.use(express.json());

const schoolRoutes = require("./routes/schoolroutes");
app.use("/api", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});