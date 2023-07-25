import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../src/redux/hooks";

import { Header } from "./components/header";
import { Filter } from "./components/filter";
import { NoteCreator } from "./components/noteCreator";
import { Note } from "./components/note";

import { getNote } from "./features/notes";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const [filterByTags, setFilterByTags] = useState<string[]>([]);
  const notes = useAppSelector((state) => state.notes.content);
  const notesTags = notes.filter((x) =>
    x.Tags.some((t) => filterByTags.includes(t))
  );

  useEffect(() => {
    dispatch(getNote());
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter filterByTags={filterByTags} setFilterByTags={setFilterByTags} />
      <NoteCreator />
      {notesTags &&
        notesTags?.map((item) => <Note key={item.Id} item={item} />)}
      {notesTags.length < 1 &&
        notes?.map((item) => <Note key={item.Id} item={item} />)}
    </div>
  );
}

export default App;
