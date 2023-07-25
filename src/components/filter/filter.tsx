import { useAppSelector } from "../../../src/redux/hooks";

import { Button } from "@mantine/core";
import { Tag } from "../tag";

import "./filter.css";

type FilterProps = {
  filterByTags: string[];
  setFilterByTags: (value: string[]) => void;
};

export const Filter = ({ filterByTags, setFilterByTags }: FilterProps) => {
  const notes = useAppSelector((state) => state.notes.content);
  const tags: string[] = [];
  notes?.map((item) => item?.Tags?.map((item: string) => tags.push(item)));

  return (
    <div className="filter">
      {Array.from(new Set(tags)).map((item: string) => (
        <Tag
          filterByTags={filterByTags}
          setFilterByTags={setFilterByTags}
          text={item}
        />
      ))}

      {tags.length > 0 && (
        <Button onClick={() => setFilterByTags([])} color="green">
          Сбросить фильтр
        </Button>
      )}
    </div>
  );
};
