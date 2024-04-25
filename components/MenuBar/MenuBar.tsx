"use client";
import {
  FaPencil,
  FaEraser,
  FaRotateRight,
  FaRotateLeft,
  FaDownload,
} from "react-icons/fa6";
import cx from "classnames";

import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  actionClickHandler,
  menuClickHandler,
} from "@/redux/feature/menuSlice";
import { MENU_ITEMS } from "@/constants";

const MenuBar = () => {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (menuName: string) => {
    dispatch(menuClickHandler(menuName));
  };

  const handleAction = (actionName: string) => {
    dispatch(actionClickHandler(actionName));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FaPencil className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleAction(MENU_ITEMS.UNDO)}
      >
        <FaRotateLeft className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleAction(MENU_ITEMS.REDO)}
      >
        <FaRotateRight className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleAction(MENU_ITEMS.DOWNLOAD)}
      >
        <FaDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default MenuBar;
