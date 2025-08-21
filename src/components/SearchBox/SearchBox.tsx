import css from "./SearchBox.module.css";
// import { toast } from "react-hot-toast";

interface SearchBoxProps {
  onChange: (value: string) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
}
