import React from "react";

import useBmiStore from "../store/bmi";

import { Formik, Form, Field } from "formik";
import calculateBMI from "../functions/calculateBMI";
import { Input, Select, Button } from "../components";

const InputBMI: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <Formik
        initialValues={{
          height: "",
          weight: "",
          age: "",
          gender: "",
        }}
        onSubmit={(values) => {
          console.log(values);

          const bmi = calculateBMI(
            parseFloat(values.height),
            parseFloat(values.weight),
            parseInt(values.age),
            values.gender
          );

          useBmiStore.setState({ bmi });
        }}>
        <Form>
          <Input
            label="Height"
            placeholder="Enter Height using Meters - 1.91"
          />
          <Input
            label="Weight"
            placeholder="Enter Weight in Kilograms - 50.2"
          />
          <Input label="Age" placeholder="Enter Age - 22" />
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
