import DatePicker from "react-date-picker";
import "./index.css";

type Props = {
  value: string;
  onSetValue: (val: string) => void;
  error: string;
};

export default function DatePickerComponent({
  error,
  onSetValue,
  value,
}: Props) {
  const onChange = (val: any) => {
    const dateObj = new Date(val);
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    onSetValue(
      `${year}/${month + 1 > 9 ? "" : "0"}${month + 1}/${
        date > 9 ? "" : "0"
      }${date}`
    );
  };

  return (
    <>
      <DatePicker
        clearIcon={null}
        value={value}
        yearPlaceholder="YYYY"
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        onChange={onChange}
        format="dd/MM/y"
        className={`${
          error
            ? "border-red border-opacity-50"
            : "border-gray border-opacity-30"
        }
      max-w-3xl w-full border-solid border py-2 px-3`}
      />
      {error && (
        <small className="text-red text-opacity-70 mt-1 font-normal flex flex-nowrap items-center gap-1 text-base">
          {error}
        </small>
      )}
    </>
  );
}
