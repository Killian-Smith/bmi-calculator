import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import calculateBMI from "../functions/calculateBMI";
import { Input, Select, Button } from "../components";

const InputBMI: React.FC = () => {
  const [bmi, setBmi] = useState<number | null>(null);

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <Formik
        initialValues={{
          height: 0,
          weight: 0,
          age: 0,
          gender: "",
        }}
        onSubmit={(values) => {
          const bmi = calculateBMI(
            values.height,
            values.weight,
            values.age,
            values.gender
          );
          setBmi(bmi);
        }}>
        <Form>
          <Input label="Height" placeholder="Enter Height" />
          <Input label="Weight" placeholder="Enter Weight" />
          <Input label="Age" placeholder="Enter Age" />
          <Field
            component={Select}
            name="gender"
            label="Gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <Button type="submit" classes="mt-5" label="Calculate BMI" />
        </Form>
      </Formik>
    </div>
  );
};

export default InputBMI;
