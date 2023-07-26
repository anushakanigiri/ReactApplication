import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

const OSMMap = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  // Define latitude and longitude for the selected regions (you can add more regions as needed)
  const regionCoordinates = {
    "United States": { lat: 37.0902, lng: -95.7129 },
    India: { lat: 20.5937, lng: 78.9629 },
    "United Kingdom": { lat: 55.3781, lng: -3.4360 },
  };

  const regionCenter = regionCoordinates[selectedRegion];

  if (!selectedRegion || !regionCenter) {
    return null; // Render nothing if no region is selected or region center not found
  }

  return (
    <MapContainer
      center={regionCenter}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={regionCenter}>
        <Popup>{selectedRegion}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OSMMap;
