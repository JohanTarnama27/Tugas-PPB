import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PlantsPage.css"; // Import the CSS file for styling

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => console.error("Error fetching plants data", error));
  }, []);

  // Limit the number of plants displayed to 10
  const plantsToDisplay = plants.slice(0, 10);

  return (
    <div className="page-container">
      <h1 className="page-title">Plants List</h1>
      <div className="plant-grid">
        {plantsToDisplay.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-info">
              <h3 className="plant-name">{plant.name}</h3>
              <p className="plant-description">{plant.description}</p>
              <Link to={`/plants/${plant.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantsPage;
