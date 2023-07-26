import React, { useState } from "react";

const FormInput = ({ regions, onLoadRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleLoadClick = () => {
    onLoadRegion(selectedRegion);
  };

  return (
    <div className="form-input">
      <h2>Region Selection</h2>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <button onClick={handleLoadClick}>Load</button>
    </div>
  );
};

export default FormInput;
