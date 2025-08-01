import { createSlice } from "@reduxjs/toolkit";
import type { SettingsState } from "../../types";

const initialState: SettingsState = {
   darkTheme: false,
   loading: false,
   monacoEditorOptions: {},
};

const settingsSlice = createSlice({
   name: "settings",
   initialState,
   reducers: {
      toggleDarkTheme: (state) => {
         state.darkTheme = !state.darkTheme;
      },

      // loadSettings: (state) => {
      //    state.loading = true;
      // },

      // loadSettingsError: (state) => {
      //    state.loading = false;
      // },
   },
});

export const { toggleDarkTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
