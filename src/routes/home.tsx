import React from "react";

import { InputBMI, Info } from "../components";
import useBmiStore from "../store/bmi";

const Home: React.FC = () => {
  const data = useBmiStore((state) => state);

  return (
    <div className="bg-slate-900 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <InputBMI />
          </div>
          <div className="col-span-12 lg:col-span-5">
            {data.bmi > 0 && <Info />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
