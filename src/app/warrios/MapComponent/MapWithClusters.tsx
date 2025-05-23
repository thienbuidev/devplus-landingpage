"use client";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import logoMarker from "@/assets/logo.png";
import L from "leaflet";
import { warrios } from "./data";
import styles from "./map.module.css";

const customMarkerIcon = L.icon({
  iconUrl: logoMarker.src,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MapComponent = () => {
  return (
    <div className={`${styles.map} flex items-center justify-center`}>
      <MapContainer
        className="flex h-[600px] w-[1250px]"
        center={[16.0471, 108.2068]}
        zoom={6}
        maxZoom={18}
        doubleClickZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup showCoverageOnHover={false} maxClusterRadius={10}>
          {warrios.map((loc) => (
            <Marker
              key={loc.name}
              position={[loc.position.lat, loc.position.lng]}
              icon={customMarkerIcon}
            >
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
