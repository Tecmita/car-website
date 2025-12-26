import React, { useState } from "react";
import { featuresData } from "../data/featuresData";
import CardContent from "./ui/CardContent";
import Button from "./ui/Button";
import logo1 from "../assets/featuresImg/buttonIcons/logo1.svg";
import logo2 from "../assets/featuresImg/buttonIcons/logo2.svg";
import logo3 from "../assets/featuresImg/buttonIcons/logo3.svg";

const icons = {
  logo1,
  logo2,
  logo3,
};
const Icon = ({ src, alt }) => <img src={src} alt="alt" className="h-6 w-6" />;

const Features = () => {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div className="mx-5 mb-20">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-white text-2xl">
          Featured Luxury Cars
        </h2>
        <div className="flex justify-center items-center mt-10 gap-4">
          <Button
            label="All"
            onClick={() => setActiveButton("all")}
            active={activeButton === "all"}
          />
          <Button
            onClick={() => setActiveButton("logo1")}
            active={activeButton === "logo1"}
            icon={() => <Icon src={icons.logo1} />}
          />
          <Button
            onClick={() => setActiveButton("logo2")}
            active={activeButton === "logo2"}
            icon={() => <Icon src={icons.logo2} />}
          />
          <Button
            onClick={() => setActiveButton("logo3")}
            active={activeButton === "logo3"}
            icon={() => <Icon src={icons.logo3} />}
          />
        </div>
        <div
          className="
          grid grid-cols-1
          md:grid-cols-3
          lg:grid-cols-3
          gap-2
          place-items-center
          "
        >
          {featuresData.map((item, i) => (
            <CardContent key={i} item={item} variant="simple" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
