import { MENU_ITEMS, PRESELECTEDCOLORS } from "@/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ToolStateType = {
  [key in MENU_ITEMS]: {
    color?: PRESELECTEDCOLORS;
    size?: number;
  };
};

type ToolPayloadType = {
  item: MENU_ITEMS;
  color?: PRESELECTEDCOLORS;
  size?: number;
};

const initialState: ToolStateType = {
  [MENU_ITEMS.PENCIL]: {
    color: PRESELECTEDCOLORS.BLACK,
    size: 2,
  },
  [MENU_ITEMS.ERASER]: {
    color: PRESELECTEDCOLORS.WHITE,
    size: 2,
  },
  [MENU_ITEMS.DOWNLOAD]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.UNDO]: {},
};

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    changeColor: (
      state: ToolStateType,
      action: PayloadAction<ToolPayloadType>
    ) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeBrushSize: (
      state: ToolStateType,
      action: PayloadAction<ToolPayloadType>
    ) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = toolSlice.actions;
export default toolSlice.reducer;
