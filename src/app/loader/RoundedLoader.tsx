import React from "react";
import styles from "./RoundedLoader.module.css";

const RoundedLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default RoundedLoader;
