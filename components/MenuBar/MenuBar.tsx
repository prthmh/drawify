import {
  FaPencil,
  FaEraser,
  FaRotateRight,
  FaRotateLeft,
  FaDownload,
} from "react-icons/fa6";

import styles from "./index.module.css";

const MenuBar = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FaPencil className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRotateLeft className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRotateRight className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default MenuBar;
