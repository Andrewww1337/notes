import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Notes = {
  Text: string;
  Id: number;
  Tags: string[];
};

interface NoteState {
  content: Notes[] | [];
  isLoading: "idle" | "pending";
  error: string | null;
}

const initialState: NoteState = {
  content: [],
  isLoading: "idle",
  error: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getNote: (state) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
    },
    getNoteSuccess: (state, action: PayloadAction<Notes[]>) => {
      if (state.isLoading === "pending") {
        state.content = action.payload;
        state.isLoading = "idle";
      }
    },
    getNoteFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = "idle";
      state.error = action.payload;
    },
    addNote: (state, action) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
    },

    addNoteSuccess: (state, action: PayloadAction<Notes[]>) => {
      if (state.isLoading === "pending") {
        state.content = action.payload;
        state.isLoading = "idle";
      }
    },

    addNoteFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = "idle";
      state.error = action.payload;
    },

    delNote: (state, action) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
    },

    delNoteSuccess: (state, action: PayloadAction<Notes[]>) => {
      if (state.isLoading === "pending") {
        state.content = action.payload;
        state.isLoading = "idle";
      }
    },

    delNoteFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = "idle";
      state.error = action.payload;
    },
  },
});

export const {
  getNote,
  getNoteSuccess,
  getNoteFailure,
  addNote,
  addNoteSuccess,
  addNoteFailure,
  delNote,
  delNoteSuccess,
  delNoteFailure,
} = notesSlice.actions;

export default notesSlice.reducer;
