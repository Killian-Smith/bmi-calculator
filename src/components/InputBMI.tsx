import React from "react";

import * as yup from "yup";

import useBmiStore from "../store/bmi";

import { Formik, Form, Field } from "formik";
import calculateBMI from "../functions/calculateBMI";
import { Input, Select, Button } from "../components";

const InputBMI: React.FC = () => {
  const bmiSchema = yup.object({
    height: yup
      .number()
      .required("Height is required")
      .positive("Must be positive")
      .integer("Must be a valid height"),
    weight: yup.number().required().positive(),
    age: yup.number().required().positive().integer().min(1).max(100),
    gender: yup
      .mixed()
      .oneOf(["male", "female"] as const)
      .required(),
  });

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <Formik
        validationSchema={bmiSchema}
        initialValues={{
          height: "",
          weight: "",
          age: "",
          gender: "male",
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
        {({ errors, touched }) => (
          <Form>
            <Input
              error={errors.height && touched.height ? errors.height : ""}
              type="number"
              label="Height"
              placeholder="Enter Height in centimeters"
            />
            <Input
              type="number"
              label="Weight"
              placeholder="Enter Weight in Kilograms"
            />
            <Input type="number" label="Age" placeholder="Enter Age" />
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
        )}
      </Formik>
    </div>
  );
};

export default InputBMI;
