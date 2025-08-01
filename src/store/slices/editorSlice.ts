import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CursorPosition {
   line: number;
   column: number;
}

interface EditorState {
   darkMode: boolean;
   colorScheme: "light" | "dark";
   cursorPosition: CursorPosition;
   showPreview: boolean;
}

const initialState: EditorState = {
   darkMode: false,
   colorScheme: "light",
   cursorPosition: { line: 1, column: 1 },
   showPreview: true,
};

// Define localStorage for potential persistence of editor state
const storage = window.localStorage;

const editorSlice = createSlice({
   name: "editor",
   initialState,
   reducers: {
      setCursorPosition: (state, action: PayloadAction<CursorPosition>) => {
         state.cursorPosition = action.payload;
      },
      setAppColorScheme: (state, action: PayloadAction<"light" | "dark">) => {
         state.colorScheme = action.payload;
         state.darkMode = state.colorScheme === "dark" ? true : false;
      },
      toggleDarkMode: (state) => {
         state.darkMode = !state.darkMode;
         state.colorScheme = state.darkMode ? "dark" : "light";
      },
      togglePreview: (state) => {
         state.showPreview = !state.showPreview;
      },
   },
});

export const { setCursorPosition, setAppColorScheme, toggleDarkMode, togglePreview } =
   editorSlice.actions;

export default editorSlice.reducer;
