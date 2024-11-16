import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PlantDetailPage.css"; // Import the CSS file for styling

const PlantDetailPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios
      .get(`https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) => console.error("Error fetching plant detail", error));
  }, [id]);

  if (!plant) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
      </div>
      <div className="plant-details">
        <h1 className="plant-name">{plant.name}</h1>
        <p className="plant-description">{plant.description}</p>
        {/* Back button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PlantDetailPage;
