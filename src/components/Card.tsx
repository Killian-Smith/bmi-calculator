import React from "react";

import { Button } from "../components";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  image: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ link, image, title, content }) => {
  return (
    <div className="bg-slate-700 rounded-lg flex flex-col">
      <img className="rounded-tr-lg rounded-tl-lg" alt={title} src={image} />
      <div className="p-3 flex-grow">
        <h2 className="font-semibold">{title}</h2>
        <p className="font-normal">{content}</p>
      </div>
      <div className="pl-3 pb-3">
        <Link to={link} target="_black" rel="noopener noreferrer">
          <Button classes="mt-3" label="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
