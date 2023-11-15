"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dates({date, setDate}) {

  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setDate(newValue); 
  }
  return (
    <div className="max-w-screen-lg pb-6">
        <span className="text-black text-lg"></span>
        <DatePicker
          placeholderText="Tarih secin"
          className=" pl-2 rounded-sm bg-meta-4 placeholder:text-white dark:placeholder:text-black text-white font-medium text-lg  dark:bg-gray-3 dark:text-black"
          selected={date}
          label="Date picker"
          value={date}
          onChange={(newValue) => handleChange(newValue)}
        />
    </div>
  );
}
