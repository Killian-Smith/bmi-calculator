import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-semibold leading-6">{label}</label>
      <div className="mt-2.5">
        <div className="group relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
          <input
            type="text"
            placeholder={placeholder}
            className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
