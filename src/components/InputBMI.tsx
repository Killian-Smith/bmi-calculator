import React from "react";

import * as yup from "yup";

import useBmiStore from "../store/bmi";

import { Formik, Form, Field } from "formik";
import calculateBMI from "../functions/calculateBMI";
import { Input, Select, Button } from "../components";

const InputBMI: React.FC = () => {
  interface BmiData {
    bmi: number;
    category: string;
  }

  const bmiSchema = yup.object({
    height: yup
      .number()
      .required("Height is required")
      .positive("Height must be positive"),
    weight: yup
      .number()
      .required("Weight is required")
      .positive("Weight must be positive"),
    age: yup
      .number()
      .required("Age is required")
      .integer("Age must be valid")
      .min(1, "Age must be greater than 0")
      .max(100, "Age must be less than 100"),
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
          const data: BmiData = calculateBMI(
            parseFloat(values.height),
            parseFloat(values.weight),
            parseInt(values.age),
            values.gender
          );

          useBmiStore.setState({ bmi: data.bmi, category: data.category });
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
              error={errors.weight && touched.weight ? errors.weight : ""}
              type="number"
              label="Weight"
              placeholder="Enter Weight in Kilograms"
            />
            <Input
              error={errors.age && touched.age ? errors.age : ""}
              type="number"
              label="Age"
              placeholder="Enter Age"
            />
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
