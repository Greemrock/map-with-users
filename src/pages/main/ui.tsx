import { Users } from "featture/users";
import { FloorPlan } from "featture/floorPlan";
import styles from "./main.module.scss";

export const Main: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Users />
      <FloorPlan />
    </div>
  );
};
