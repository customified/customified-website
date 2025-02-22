import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText?: string;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  placeholderText,
  className,
}) => {
  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholderText}
      className={className}
      dateFormat="MMMM d, yyyy"
    />
  );
};

export default DatePicker;
