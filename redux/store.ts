import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/redux/feature/menuSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
