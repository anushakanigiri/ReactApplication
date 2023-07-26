import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import FormInput from './Components/FormInput';
import RegionInfo from './Components/RegionInfo';
import OSMMap from './Components/OSMMap';

const handleLoadRegion = (region) => {
  // Implement your map loading logic here
  console.log(`Loading map for ${region}`);
};

const App = () => {
  const regions = ["United States", "India", "United Kingdom"];
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
      <FormInput regions={regions} onLoadRegion={handleLoadRegion} />
      <RegionInfo />
      <OSMMap />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
