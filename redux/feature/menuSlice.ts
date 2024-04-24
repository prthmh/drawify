import { MENU_ITEMS } from "@/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MenuStateType = {
  activeMenuItem: string;
  actionMenuItem: string | null;
};

const initialState: MenuStateType = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuClickHandler: (state: MenuStateType, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
    actionClickHandler: (
      state: MenuStateType,
      action: PayloadAction<string | null>
    ) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { menuClickHandler, actionClickHandler } = menuSlice.actions;
export default menuSlice.reducer;
