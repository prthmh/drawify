"use client";

import { MENU_ITEMS, PRESELECTEDCOLORS } from "@/constants/index";
import styles from "./index.module.css";
import { useAppSelector } from "@/redux/store";

const ToolBar = () => {
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);

  const showColors = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushSize =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  return (
    <div className={styles.toolBarContainer}>
      {showColors && (
        <div className={`${styles.toolItem} flex flex-col gap-1`}>
          <h3 className={styles.toolText}>Color Picker</h3>
          <p className=" text-sm text-gray-500 w-[20ch]">Pre selected colors</p>
          <div className={styles.colorContainer}>
            {Object.entries(PRESELECTEDCOLORS)?.map((color) => (
              <div
                key={color[0]}
                className={styles.colorBox}
                style={{ backgroundColor: color[1] }}
              ></div>
            ))}
          </div>

          <p className=" text-sm text-gray-500 w-[20ch]">Color palette</p>

          <input type="color" className={styles.tool} />
        </div>
      )}

      {showBrushSize && (
        <div className={styles.toolItem}>
          <h3 className={styles.toolText}>
            {activeMenuItem === MENU_ITEMS.ERASER ? "Eraser" : "Brush"} Size
          </h3>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            className={styles.tool}
          />
        </div>
      )}
    </div>
  );
};

export default ToolBar;
