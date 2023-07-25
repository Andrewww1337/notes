import { useState } from "react";
import { useAppDispatch } from "../../../src/redux/hooks";

import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import { Text } from "@mantine/core";

import { addNote } from "../../features/notes";

import "./noteCreator.css";

export const NoteCreator = () => {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState<string[]>();

  return (
    <div className="noteCreator">
      <Textarea
        label="Добавь заметку"
        placeholder="Add note"
        maxRows={4}
        radius="md"
        size="md"
        value={keyword ? keyword : ""}
        onChange={(e) => {
          setKeyword(e.target.value);
          setTags(
            e.target.value.split(" ").filter((item) => item.includes("#"))
          );
        }}
      />
      <div className="noteCreatorButtonPanel">
        <div className="noteCreatorTagsPanel">
          {Array.from(new Set(tags))?.map((item) => (
            <Text c="blue">{item}</Text>
          ))}
        </div>

        <Button
          onClick={() => {
            if (keyword) {
              dispatch(
                addNote({
                  Text: `${keyword}`,
                  Id: Date.now(),
                  Tags: tags,
                })
              );
              setKeyword("");
              setTags([]);
            }
          }}
          className="noteButton"
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
