const db = require("../config/sql");
const getNearbySchools = (req, res) => {
  let { lat, lng, page = 1, limit = 10 } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ message: "Both lat & lng required" });
  }
  lat = parseFloat(lat);
  lng = parseFloat(lng);
  page = parseInt(page);
  limit = parseInt(limit);
  const offs = (page - 1) * limit;
  const countsql = `SELECT COUNT(*) AS total FROM schools`;
  db.query(countsql, (err, countans) => {
    if (err) return res.status(500).json(err);

    const total = countans[0].total;
    const totalpages = Math.ceil(total / limit);
    const dataSql = `
      SELECT *,
      (6371 * ACOS(
        COS(RADIANS(?)) * COS(RADIANS(latitude)) *
        COS(RADIANS(longitude) - RADIANS(?)) +
        SIN(RADIANS(?)) * SIN(RADIANS(latitude))
      )) AS distance
      FROM schools
      ORDER BY distance ASC
      LIMIT ? OFFSET ?;
    `;
    db.query(dataSql, [lat, lng, lat, limit, offs], (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        page,
        limit,
        total,
        totalpages,
        results: result
      });
    });
  });
};

module.exports = { getNearbySchools };