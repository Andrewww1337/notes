export {
  type Notes,
  getNote,
  getNoteFailure,
  getNoteSuccess,
  addNote,
  addNoteFailure,
  addNoteSuccess,
  delNote,
  delNoteFailure,
  delNoteSuccess,
  default as notesReducer,
  notesSlice,
} from "./notesSlice";
