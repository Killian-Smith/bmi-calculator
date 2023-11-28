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
          title: "Overview – Eating disorders",
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
          link: "http://google.co.uk",
          image:
            "https://www.bhf.org.uk/-/media/images/information-support/support/healthy-living/healthy-eating/eatwell_guide_colour-640x435.jpg?h=450&w=640&rev=98ae4985bd594c269759030613b27d21&hash=132CB2FEB60DE2605CC5CDF7A07CEA67",
          title: "",
          content: "The Eatwell Guide helps you get the balance right",
        },
      ],
    },

    overweight: {
      header: "You are overweight",
      content:
        "We suggest that you lose some weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "http://google.co.uk",
          image:
            "https://www.bhf.org.uk/-/media/images/information-support/support/healthy-living/healthy-eating/eatwell_guide_colour-640x435.jpg?h=450&w=640&rev=98ae4985bd594c269759030613b27d21&hash=132CB2FEB60DE2605CC5CDF7A07CEA67",
          title: "?",
          content: "The Eatwell Guide helps you get the balance right",
        },
      ],
    },

    obese: {
      header: "You are obese",
      content:
        "We suggest that you lose some weight. Have a look below to see some recommended resources to help with that.",
      resources: [
        {
          link: "http://google.co.uk",
          image:
            "https://www.bhf.org.uk/-/media/images/information-support/support/healthy-living/healthy-eating/eatwell_guide_colour-640x435.jpg?h=450&w=640&rev=98ae4985bd594c269759030613b27d21&hash=132CB2FEB60DE2605CC5CDF7A07CEA67",
          title: "?",
          content: "The Eatwell Guide helps you get the balance right",
        },
      ],
    },
  };

  console.log(info[data.category]);

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
              key={resource.link}
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
