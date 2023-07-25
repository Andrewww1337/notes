import { useState } from "react";
import { useAppDispatch } from "../../../src/redux/hooks";

import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import { Text } from "@mantine/core";

import { delNote, addNote } from "../../features/notes";

import "./note.css";

type NoteProps = {
  item: {
    Text: string;
    Id: number;
    Tags: string[];
  };
};

export const Note = ({ item }: NoteProps) => {
  const [keyword, setKeyword] = useState(item.Text);

  const [tags, setTags] = useState<string[]>(item.Tags);
  const [redactIsOpen, setRedactIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <div className="note">
      {!redactIsOpen && (
        <div className="noteText">
          {" "}
          <p>{keyword.replace(/#/gi, "")}</p>
        </div>
      )}
      <div>
        {redactIsOpen && (
          <div className="noteTextArea">
            <Textarea
              placeholder="..."
              maxRows={5}
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
          </div>
        )}
      </div>
      <div className="noteTagsPanel">
        {Array.from(new Set(tags))?.map((item) => (
          <Text c="blue">{item}</Text>
        ))}
      </div>
      <div className="noteButtonsPanel">
        <Button
          onClick={() => {
            setRedactIsOpen(!redactIsOpen);
            setKeyword(item.Text);
            setTags(item.Tags);
          }}
        >
          {!redactIsOpen ? "Редактировать" : "Отменить"}
        </Button>
        <Button
          onClick={() => {
            if (!redactIsOpen) {
              dispatch(delNote(item.Id));
            } else {
              dispatch(
                addNote({
                  Text: `${keyword}`,
                  Id: item.Id,
                  Tags: tags,
                })
              );
              setRedactIsOpen(false);
            }
          }}
        >
          {!redactIsOpen ? " Удалить" : "Сохранить"}
        </Button>
      </div>
    </div>
  );
};
