import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch} from "react-redux";
import { loadRegion, toggleNightMode } from "../Actions/mapActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const [collapsed, setCollapsed] = useState(true);
  const regions = ["United States", "India", "United Kingdom"];
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleLoadRegion = () => {
    dispatch(loadRegion(selectedRegion));
  };

  const handleToggleNightMode = () => {
    dispatch(toggleNightMode());
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="sidebar-content">
        <h2>Region Selection</h2>
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select a region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <button onClick={handleLoadRegion}>Load</button>
        <div className="night-mode-toggle">
          <label>Toggle Night Mode:</label>
          <input
            type="checkbox"
            checked={nightMode}
            onChange={handleToggleNightMode}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
