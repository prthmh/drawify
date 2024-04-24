import React from "react";
import styles from "./index.module.css";

const ToolBar = () => {
  return (
    <div className={styles.toolBarContainer}>
      <div className={styles.toolItem}>
        <h3 className={styles.toolText}>Color Picker:</h3>
        <input type="color" className={styles.tool} />
      </div>
      <div className={styles.toolItem}>
        <h3 className={styles.toolText}>Brush Size</h3>
        <input type="range" min={1} max={10} step={1} className={styles.tool} />
      </div>
    </div>
  );
};

export default ToolBar;
