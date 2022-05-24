import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./displaymap.css";

const DisplayMap = () => {
  const [coordinates, setcoordinates] = useState([53.126126, 30.318214]);
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
          <CircleMarker color="red" fillOpacity={1}
            center={[
              covidNumbers.coordinates.latitude,
              covidNumbers.coordinates.longitude,
            ]}
            // key={covidNumbers.toString()}
          >
            <Popup position={[covidNumbers.country, covidNumbers.country]}>
              <div>
                <p>
                  Country: {`${covidNumbers.province}, ${covidNumbers.country}`}{" "}
                  <br />
                  Confirmed cases: {covidNumbers.stats.confirmed} <br />
                  Confirmed deaths: {covidNumbers.stats.deaths}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
