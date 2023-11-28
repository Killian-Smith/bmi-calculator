import React from "react";

import useBmiStore from "../store/bmi";

import { Card } from "../components";

const Info: React.FC = () => {
  const data = useBmiStore((state) => state);

  const info: any = {
    underweight: {
      header: "You are underweight",
      content:
        "We suggest that you gain some weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/healthy-ways-to-gain-weight/",
          image:
            "https://images.theconversation.com/files/371033/original/file-20201124-19-6l9aa.jpg?ixlib=rb-1.1.0&rect=38%2C7%2C5150%2C3446&q=45&auto=format&w=926&fit=clip",
          title: "Healthy ways to gain weight",
          content:
            "Gaining weight can be difficult for some people. With a few changes, you can gradually reach a healthy weight",
        },
        {
          link: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/",
          image:
            "https://2027031.fs1.hubspotusercontent-na1.net/hubfs/2027031/eating%20disorder.jpeg",
          title: "Eating disorders",
          content:
            "An eating disorder is a mental health condition where you use the control of food to cope with feelings and other situations",
        },
      ],
    },

    healthy: {
      header: "You are healthy",
      content:
        "We suggest that you maintain your weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "https://www.nhs.uk/live-well/exercise/",
          image:
            "https://www.usdermatologypartners.com/wp-content/uploads/2020/09/Master-Blast-Skin-Care-Goals-Healthy-Diet.jpeg",
          title: "Exercise",
          content:
            "Exercise guidelines and workouts to help improve your fitness and wellbeing",
        },
        {
          link: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/",
          image:
            "https://www.realsimple.com/thmb/BalZfOrt6rdvKkA62O1MBzN6US0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-eat-balanced-diet-2000-836357eb36ba4564b8e65ec91960c9b7.jpg",
          title: "How to eat a balanced diet",
          content:
            "Information about eating a balanced diet, including advice about vegetarian and vegan diet",
        },
      ],
    },

    overweight: {
      header: "You are overweight",
      content:
        "We suggest that you lose some weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/",
          image:
            "https://www.knightspharmacy.co.uk/wp-content/uploads/2023/01/Weight-Management-6.jpg",
          title: "Tips to help you lose weight",
          content:
            "If you're overweight, losing weight will give you more energy and help to reduce the risk of obesity, heart disease and type 2 diabetes.",
        },
        {
          link: "https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/",
          image:
            "https://www.sundried.com/cdn/shop/articles/c27ddca5b9550a6940dfef2581b6c38d_1024x1024.jpg?v=1557744738",
          title: "Get running with Couch to 5K",
          content:
            "Taking up running can seem like a scary prospect, especially if you feel out of shape or unfit.",
        },
      ],
    },

    obese: {
      header: "You are obese",
      content:
        "We suggest that you lose some weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/",
          image:
            "https://www.knightspharmacy.co.uk/wp-content/uploads/2023/01/Weight-Management-6.jpg",
          title: "Tips to help you lose weight",
          content:
            "If you're overweight, losing weight will give you more energy and help to reduce the risk of obesity, heart disease and type 2 diabetes.",
        },
        {
          link: "https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/",
          image:
            "https://www.sundried.com/cdn/shop/articles/c27ddca5b9550a6940dfef2581b6c38d_1024x1024.jpg?v=1557744738",
          title: "Get running with Couch to 5K",
          content:
            "Taking up running can seem like a scary prospect, especially if you feel out of shape or unfit.",
        },
      ],
    },
  };

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <div className="grid gap-2">
        <p className="font-semibold text-2xl">Your BMI is {data.bmi}</p>
        <p className="font-semibold text-lg">{info[data.category].header}</p>
        <p>{info[data.category].content}</p>

        <p className="font-semibold">What's next?</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {info[data.category].resources.map((resource: any) => (
            <Card
              key={resource.title}
              link={resource.link}
              image={resource.image}
              title={resource.title}
              content={resource.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
