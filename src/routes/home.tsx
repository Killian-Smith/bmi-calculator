import React from "react";

import { Input, Select } from "../components";

const Home: React.FC = () => {
  return (
    <div className="bg-slate-900 h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 ">
            <div className="bg-slate-800 rounded-xl p-4">
              <Input label="Height" placeholder="Enter Height" />
              <Input label="Weight" placeholder="Enter Weight" />
              <Input label="Age" placeholder="Enter Age" />
              <Select label="Age" />
            </div>
          </div>
          <div className="col-span-1">{/* Colum */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
