import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
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
    className={`flex md:h-[600px] lg:h-[600px] w-screen h-[500px]`}
    center={[16.0471, 108.2068]}
    zoom={6}
    maxZoom={18}
    doubleClickZoom={true}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <MarkerClusterGroup showCoverageOnHover={false} maxClusterRadius={8}>
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
