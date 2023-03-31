import { MapContainer, GeoJSON } from "react-leaflet";
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
        zoom={19}
      >
        <GeoJSON data={dataElement as GeoJsonObject} />
      </MapContainer>
    </div>
  );
};
