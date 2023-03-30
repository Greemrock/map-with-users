import styles from "./card.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
