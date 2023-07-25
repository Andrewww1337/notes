import { put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { addNoteFailure, addNoteSuccess, Notes } from "../features/notes";

export function* addNote(action: PayloadAction<Notes>) {
  try {
    const date = localStorage.getItem("test");
    const parsedDate = JSON.parse(date ? date : "[]");
    const editNote = parsedDate.find(
      (item: { Id: number }) => item.Id === action.payload.Id
    );
    if (editNote) {
      editNote.Text = action.payload.Text;
      editNote.Tags = action.payload.Tags;
    } else {
      parsedDate.push(action.payload);
    }
    localStorage.setItem("test", JSON.stringify(parsedDate));
    yield put(addNoteSuccess(parsedDate));
  } catch (error: any) {
    yield put(addNoteFailure(error.message));
  }
}

export function* addNoteSaga() {
  yield takeEvery("notes/addNote", addNote);
}
