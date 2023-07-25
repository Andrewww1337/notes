import { put, takeEvery } from "redux-saga/effects";

import { getNoteFailure, getNoteSuccess } from "../features/notes";

export function* getNote() {
  try {
    const date = localStorage.getItem("test");
    yield put(getNoteSuccess(JSON.parse(date ? date : "[]")));
  } catch (error: any) {
    yield put(getNoteFailure(error.message));
  }
}

export function* noteSaga() {
  yield takeEvery("notes/getNote", getNote);
}
