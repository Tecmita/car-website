import React from "react";
import home1 from "../assets/hero/heroImages/home1.svg";
import icon1 from "../assets/hero/heroIcons/temperature-icon.svg";
import icon2 from "../assets/hero/heroIcons/mileage-icon.svg";
import icon3 from "../assets/hero/heroIcons/battery-icon.svg";

const carStats = [
  {
    icon: icon1,
    value: "24°",
    label: "TEMPERATURE",
    color: "text-gray-400",
  },
  {
    icon: icon2,
    value: "873",
    label: "MILEAGE",
    color: "text-gray-400",
  },
  {
    icon: icon3,
    value: "94%",
    label: "BATTERY",
    color: "text-gray-400",
  },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen md:min-h-[80vh] lg:min-h-[50vh] xl:min-h-[90vh] 2xl:min-h-[90vh] bg-[#0A0A0B] relative">
      {/* halo superior izquierdo */}

      <div
        className="absolute 
        w-[220px] h-[300px] 
        top-[-2%] left-[-5%]
        sm:top-[-8%] sm:left-[-15%]
        lg:top-[-8%] lg:left-[-1%] 
        

  bg-[radial-gradient(circle_at_top_left,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
  blur-[60px] z-0
  sm:w-[450px] sm:h-[400px] sm:blur-[100px]
  md:w-[450px] md:h-[400px] md:blur-[100px]
  lg:w-[300px] lg:h-[400px] lg:blur-[100px]
  "
      ></div>

      {/* Halo inferior derecho */}
      <div
        className="absolute w-[250px] h-[250px] 
        bottom-[15%] right-[-10%]
        sm:bottom-[20%] sm:right-[-10%]
        md:bottom-[30%] md:right-[-15%]
        lg:bottom-[20%] lg:right-[1%]
        
  bg-[radial-gradient(circle_at_bottom_right,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
  blur-[70px] z-0
  sm:w-[450px] sm:h-[450px] sm:blur-[120px]
  md:w-[450px] md:h-[450px] sm:blur-[120px]
  lg:w-[300px] lg:h-[400px] sm:blur-[120px]
  
  "
      ></div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <div
          className="text-white text-center mb-9 mt-13 
        sm:mb-9 sm:mt-20
        md:mb-10 md:mt-30
        lg:mb-10 lg:mt-20
        xl:mb-10 xl:mt-20
        "
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5">
            Choose The Best Car
          </h1>
          <h2 className="text-base sm:text-xl md:text-xl lg:text-2xl">
            Porshe Mission E
          </h2>
          <p className="text-base sm:text-xl md:text-xl lg:text-2xl">
            Electric Car
          </p>
        </div>

        <div className="flex flex-col items-center max-w-96 md:max-w-60 lg:max-w-64 2xl:max-w-96">
          <img src={home1} className="w-full max-w-full " draggable="false" />

          <div className="flex justify-between w-full text-white mt-[35px]">
            {carStats.map((stat, index) => (
              <div
                className="flex flex-col justify-center items-center w-20 text-center sm:w-64"
                key={index}
              >
                <img src={stat.icon} className="w-8 h-8 mb-1" alt="" />
                <h3>{stat.value}</h3>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="
            w-[120px] h-[120px]
            sm:w-[180px] sm:h-[180px]
            lg:w-[150px] lg:h-[150px]

          relative text-white font-semibold rounded-full bg-transparent
         before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[3px] before:border-[#02DB8A] before:shadow-[0_0_12px_#00FF9F]
         after:content-[''] after:absolute after:inset-5 after:rounded-full after:border-[3px] after:border-[#099260] mt-12
         sm:after:inset-7 lg:after:inset-5 sm:mt-15 md:mt-20 lg:mt-25 xl:mt-12
         "
          >
            START
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
