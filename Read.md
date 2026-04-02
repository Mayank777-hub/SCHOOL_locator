
# School Management API

## Project Overview
This project is a **Node.js API for managing schools**, built with **Express.js** and **MySQL**.  
It allows users to:

- Add new schools to the database  
- Retrieve a list of schools sorted by proximity to user-specified coordinates  

> **Database Note:** The MySQL database is **local**, so running the API locally requires MySQL running on your system.  
> **We use MySQL Workbench** to view and manage tables easily.  

> **Hosting Note:** APIs are hosted on Render for live testing. Local development runs on **http://localhost:5300**.

---

## Environment Setup

1. Create a `.env` file in your project root.  
2. Add your MySQL password as an environment variable:


SQL_PASSWORD=your_mysql_password
## My Submission

- **Name:** MAYANK
- **Node.js Skills:** Excellent (4/5)
- **Resume:** [View Resume](https://drive.google.com/file/d/1sPUp46gtH9wC24LoUHcj2vniPd2N_rtt/view?usp=sharing)

## Deliverables

1. **Source Code Repository:** [GitHub Repo](https://github.com/Mayank777-hub/SCHOOL_locator)
2. **Live API Endpoints:** [Test APIs](https://school-locator-8i1y.onrender.com)
3. **Postman Collection:** [Download Collection](https://drive.google.com/file/d/1WX2i0ogc_ofNqr_Zb6OefWe69qwQuRzp/view?usp=sharing)

### Add School API
>local api mounted on /api
`http://localhost:5300/api`

- **POST** `/addSchool`
- **Body Example:**
```json
{
  "name": "Greenwood High",
  "address": "123 Main St",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

### Retrieve Schoolist API
- **POST** `/listSchools?lat=28.6&lng=77.2`
- **response Example:**
```json
 {
    "page": 1,
    "limit": 10,
    "total": 64,
    "totalpages": 7,
    "results": [
        {
            "id": 58,
            "Name": "Delhi Public School R.K. Puram",
            "State": "Delhi",
            "Address": "R.K. Puram New Delhi 110022",
            "Latitude": 28.5612,
            "Longitude": 77.184,
            "distance": 4.588675486688341
        },
        {
            "id": 57,
            "Name": "Springdales School Delhi",
            "State": "Delhi",
            "Address": "Pusa Road New Delhi 110060",
            "Latitude": 28.6448,
            "Longitude": 77.1538,
            "distance": 6.719365130779242
        }
 }
```
