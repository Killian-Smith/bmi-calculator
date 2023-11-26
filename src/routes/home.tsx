import React from "react";

import { InputBMI } from "../components";

const Home: React.FC = () => {
  return (
    <div className="bg-slate-900 h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 ">
            <InputBMI />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
