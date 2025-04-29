// utils/customIcon.ts
import L from "leaflet";
import { LuSchool2 } from "react-icons/lu";
import { renderToStaticMarkup } from "react-dom/server";
import style from "styled-jsx/style";

export const customIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div style={{ color: "#1d4ed8", fontSize: "24px" }}>
      <LuSchool2 />
    </div>
  ),
  className: "", // Xóa class default của Leaflet
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});
