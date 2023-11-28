import React from "react";
import useBmiStore from "../store/bmi";

import { InputBMI } from "../components";

const Home: React.FC = () => {
  const data = useBmiStore((state) => state);

  return (
    <div className="bg-slate-900 h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7">
            <InputBMI />
          </div>
          <div className="col-span-5">
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold">BMI:</h1>
                <p className="text-4xl font-bold">{data.bmi}</p>
                <h1 className="text-2xl font-bold">Category</h1>
                <p className="text-4xl font-bold">{data.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
