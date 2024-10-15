import { Search } from "lucide-react";
import React, { FC, InputHTMLAttributes } from "react";

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <div className="flex items-center w-full bg-gray-200 py-1 px-2 rounded-md mb-2">
      <input
        className="bg-transparent outline-none flex-grow"
        type="text"
        placeholder="Search"
        {...rest}
      />
      <Search size={16} />
    </div>
  );
};

export default SearchInput;
