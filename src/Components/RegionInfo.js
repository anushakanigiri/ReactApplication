import React from "react";
import { useSelector } from "react-redux";

const RegionInfo = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  // Define region information
  const regionInfo = {
    "United States": {
      currencySymbol: "$",
      speedUnit: "mph",
      distanceUnit: "miles",
      volumeUnit: "gallons",
      timezone: "UTC-4 to UTC-10",
    },
    India: {
      currencySymbol: "₹",
      speedUnit: "kmph",
      distanceUnit: "kilometers",
      volumeUnit: "liters",
      timezone: "UTC+5:30",
    },
    "United Kingdom": {
      currencySymbol: "£",
      speedUnit: "mph",
      distanceUnit: "miles",
      volumeUnit: "liters",
      timezone: "UTC+0 to UTC+1",
    },
  };

  if (!selectedRegion || !regionInfo[selectedRegion]) {
    return null; // Render nothing if no region is selected or region info not found
  }

  const {
    currencySymbol,
    speedUnit,
    distanceUnit,
    volumeUnit,
    timezone,
  } = regionInfo[selectedRegion];

  return (
    <div className="region-info">
      <h2>Region Information</h2>
      <p>Currency Symbol: {currencySymbol}</p>
      <p>Units of Speed: {speedUnit}</p>
      <p>Units of Distance: {distanceUnit}</p>
      <p>Units of Volume: {volumeUnit}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
};

export default RegionInfo;
