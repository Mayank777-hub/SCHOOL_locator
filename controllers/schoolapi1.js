const db = require("../config/sql");

const addSchool = (req, res) => {
  const { Name, State, Address, Latitude, Longitude } = req.body;

  if (!Name || !Address || !State || !Latitude || !Longitude) {
    return res.status(400).json({ msg: "Name, State, Address, Latitude, Longitude are all required" });
  }

  const checkSql = `SELECT * FROM schools WHERE name = ? AND latitude = ? AND longitude = ?`;

  db.query(checkSql, [Name, Latitude, Longitude], (err, result) => {
    if (err) return res.status(500).json(err); 

    if (result.length > 0) {
      return res.status(409).json({ message: "School already exists" }); 
    }
    const insertSql = `INSERT INTO schools (Name, State, Address, Latitude, Longitude) VALUES (?, ?, ?, ?, ?)`;

    db.query(insertSql, [Name, State, Address, Latitude, Longitude], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ msg: "School added successfully :-)" });
    });
  });
};

module.exports = { addSchool };