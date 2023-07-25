import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { notesReducer } from "../features/notes";
import { noteSaga } from "../sagas/noteSagas";
import { addNoteSaga } from "../sagas/addNoteSagas";
import { delNoteSaga } from "../sagas/delNoteSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware(getDefauitMiddleware) {
    return getDefauitMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(noteSaga);
sagaMiddleware.run(addNoteSaga);
sagaMiddleware.run(delNoteSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
