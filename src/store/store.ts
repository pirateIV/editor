import { configureStore } from "@reduxjs/toolkit";

import editorReducer from "./slices/editorSlice";

export const store = configureStore({
   reducer: {
      editor: editorReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
