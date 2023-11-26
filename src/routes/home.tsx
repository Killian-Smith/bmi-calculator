import React from "react";
import useBmiStore from "../store/bmi";

import { InputBMI } from "../components";

const Home: React.FC = () => {
  const bmi = useBmiStore((state) => state.bmi);

  console.log(bmi);
  return (
    <div className="bg-slate-900 h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 ">
            <InputBMI />
          </div>
          <div className="col-span-1">Your BMI is: {bmi}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
