import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import styles from "./map.module.css";
import logoMarker from "@/assets/logo.png";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";
import L from "leaflet";
import { warrios } from "constant/data";

export const createCustomMarkerIcon = (iconUrl: string) =>
  L.icon({
    iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: "flex rounded-full bg-white",
  });

const Map = () => (
  <MapContainer
    className={`flex max-w-[1250px] max-h-[600px] ${styles.map}`}
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
          icon={createCustomMarkerIcon(loc.url || logoMarker.src)}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  </MapContainer>
);

export default Map;
