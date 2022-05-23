import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./displaymap.css";
import L from "leaflet";

const DisplayMap = () => {
  const [coordinates, setcoordinates] = useState([53.126126, 30.318214]);
  const [covidCountryData, setCovideCountryData] = useState([]);

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

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
      <MapContainer
        className="mapLayout"
        center={coordinates}
        zoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {covidCountryData.map((covidNumbers) => (
          <Marker
            // key={covidNumbers.toString()}
            position={[
              covidNumbers.coordinates.latitude,
              covidNumbers.coordinates.longitude,
            ]}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
