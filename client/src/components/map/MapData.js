import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";

const MapData = (props) => {
  const [covidCountryData, setCovideCountryData] = useState([]);

  useEffect(() => {
    const covidStats = async () => {
      let response = await fetch(`/api`);
      let data = await response.json();
      setCovideCountryData(data);
    };
    covidStats();
  }, []);

  return (
    <div>
      {covidCountryData.map((covidNumbers) => {
        <Marker
          key={covidNumbers.country}
          position={[covidNumbers.coordinates.latitude, covidNumbers.coordinates.longitude]}
        ></Marker>;
      })}
    </div>
  );
};

export default MapData;
