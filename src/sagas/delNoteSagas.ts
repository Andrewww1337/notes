import { put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { delNoteFailure, delNoteSuccess } from "../features/notes";

export function* delNote(action: PayloadAction<number>) {
  try {
    const date = localStorage.getItem("test");
    const parsedDate = JSON.parse(date ? date : "[]");
    parsedDate.splice(
      parsedDate.findIndex(
        (item: { Id: number }) => item.Id === action.payload
      ),
      1
    );
    localStorage.setItem("test", JSON.stringify(parsedDate));
    yield put(delNoteSuccess(parsedDate));
  } catch (error: any) {
    yield put(delNoteFailure(error.message));
  }
}

export function* delNoteSaga() {
  yield takeEvery("notes/delNote", delNote);
}
