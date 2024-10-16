import { ChangeEvent } from "react";

type Props = {
  label: string;
  value: string;
  setValue: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
};

export default function Input({
  label,
  value,
  setValue,
  placeholder,
  name,
}: Props) {
  return (
    <>
      <label className="text-white text-base font-normal">
        {label}
        <input
          value={value}
          name={name}
          onChange={(e) => setValue(e)}
          placeholder={placeholder}
          className="border-b-2 placeholder:text-white placeholder:text-opacity-50 mt-1
          h-[60px] bg-transparent text-xl block w-full focus:outline-none text-white border-white 
          border-opacity-50 hover:border-opacity-100 focus:border-opacity-100"
        />
      </label>
    </>
  );
}
