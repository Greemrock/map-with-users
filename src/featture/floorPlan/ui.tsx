import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { GeoJsonObject } from "geojson";
import dataElement from "./config/floor.json";
import styles from "./floorPlan.module.scss";
import "leaflet/dist/leaflet.css";

export const FloorPlan: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={{ lat: 53.91687819154794, lng: 27.63435423374176 }}
        style={{ width: "100%", height: "100%" }}
        zoom={20}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={dataElement as GeoJsonObject} />
      </MapContainer>
    </div>
  );
};
