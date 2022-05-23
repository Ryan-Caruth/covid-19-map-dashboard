import React, { useState } from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './displaymap.css'

const DisplayMap = () => {
  const [coordinates, setcoordinates] = useState([53.126126, 30.318214])

  return (
    <MapContainer className='mapLayout'
      center={coordinates}
      zoom={2}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default DisplayMap