import { Button } from "@mantine/core";

type TagProps = {
  text: string;
  filterByTags: string[];
  setFilterByTags: (value: string[]) => void;
};

export const Tag = ({ text, filterByTags, setFilterByTags }: TagProps) => {
  return (
    <div className="tag">
      <Button
        onClick={() => {
          if (!filterByTags.find((item: string) => item === text)) {
            setFilterByTags([text].concat(filterByTags));
          }
        }}
        color={filterByTags.find((el) => el === text) ? "yellow" : "blue"}
      >
        {text}
      </Button>
    </div>
  );
};
