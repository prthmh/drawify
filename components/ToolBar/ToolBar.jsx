"use client";

import cx from "classnames";
import { MENU_ITEMS, PRESELECTEDCOLORS } from "@/constants/index";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { changeBrushSize, changeColor } from "@/redux/feature/toolSlice";
import { useMemo } from "react";

const ToolBar = () => {
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useAppSelector((state) => state.tool[activeMenuItem]);
  const dispatch = useAppDispatch();

  const showColors = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushSize =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };

  const preSelectedColors = useMemo(
    () =>
      Object.entries(PRESELECTEDCOLORS).filter(
        (c) => c[1] !== PRESELECTEDCOLORS.WHITE
      ),
    []
  );

  return (
    <div className={styles.toolBarContainer}>
      {showColors && (
        <div className={`${styles.toolItem} flex flex-col gap-1`}>
          <h3 className={styles.toolText}>Color Picker</h3>
          <p className=" text-sm text-gray-500 w-[20ch]">Pre selected colors</p>
          <div className={styles.colorContainer}>
            {preSelectedColors?.map((c) => (
              <div
                key={c[0]}
                className={cx(styles.colorBox, {
                  [styles.active]: color === c[1],
                })}
                style={{ backgroundColor: c[1] }}
                onClick={() => updateColor(c[1])}
              ></div>
            ))}
          </div>

          <p className=" text-sm text-gray-500 w-[20ch]">Color palette</p>

          <input
            type="color"
            className={styles.tool}
            onChange={(e) => updateColor(e.target.value)}
          />
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
            max={15}
            step={1}
            value={size}
            className={styles.tool}
            onChange={updateBrushSize}
          />
        </div>
      )}
    </div>
  );
};

export default ToolBar;
