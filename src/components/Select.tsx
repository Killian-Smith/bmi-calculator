// import React from "react";

// interface Props {
//   value?: string;
//   label: string;
// }

// const Select: React.FC<Props> = ({ value, label }) => {
//   return (
//     <div>
//       <label className="block text-sm font-semibold leading-6">{label}</label>
//       <div className="mt-2.5">
//         <div className="group relative rounded-md bg-slate-700 highlight-white/10 focus-within:bg-transparent">
//           <select
//             value={value}
//             className="appearance-none w-full text-sm leading-6 bg-slate-700 text-slate-900 rounded-md py-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2 custom-select">
//             <option value="male" selected>
//               Male
//             </option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Select;
import React from "react";
import { FieldProps } from "formik";

interface Props extends FieldProps {
  label: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<Props> = ({ field, label, options }) => {
  return (
    <div>
      <label className="block text-sm font-semibold leading-6">{label}</label>
      <div className="mt-2.5">
        <div className="group relative rounded-md bg-slate-700 highlight-white/10 focus-within:bg-transparent">
          <select
            {...field}
            onChange={(event) => field.onChange(event)}
            className="appearance-none w-full text-sm leading-6 bg-slate-700 text-slate-900 rounded-md py-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2 custom-select">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
