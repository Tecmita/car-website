import React from "react";
import carFeatures from "../assets/popularFeatures/featured-car.svg";
import map1 from "../assets/popularFeatures/map.svg";

const GlassCard = ({ children, className }) => (
  <div
    className={`w-[7.5rem] h-[6rem] 
    md:w-[9rem] md:h-[7rem]
    lg:w-[9rem] lg:h-[5rem]
    xl:w-[7.8rem] lg:h-[8rem] 
    rounded-xl
  bg-white/10
    backdrop-blur-xl 
    border 
  border-white/10 
    shadow-lg 
    p-4 flex flex-col justify-center gap-1 ${className}`}
  >
    {children}
  </div>
);

const PopularFeatures = () => {
  return (
    <section className="mt-20 mb-20">
      <div className="text-center text-white">
        <h1 className="font-semibold text-2xl mt-">More Features</h1>
        <div className="flex align-items justify-center mt-7">
          <div className="relative w-full max-w-[1680px] h-[700px] overflow-hidden">
            <img
              src={map1}
              className="
                absolute
                top-1/2
                left-1/2
                max-w-none
                w-[160%]
                md:w-[120%]
                lg:w-[80%]
                xl:w-[70%]
                -translate-x-[50%]
                -translate-y-1/2
                z-0"
            />
            <img
              src={carFeatures}
              className="
              absolute 
              top-1/2 
              left-1/2  
              -translate-x-1/2 
              w-[35%] 
              -translate-y-1/2 
              z-10 
              md:w-[25%] 
              lg:w-[20%]
              xl:w-[15%]
              "
              alt=""
            />
            <GlassCard className="absolute z-20 top-[20%] left-[10%] md:top-[35%] md:left-[22%] lg:top-[25%] lg:left-[32%] xl:top-[25%] xl:left-[37%]">
              <span className="text-2xl text-white font-semibold">800v</span>
              <span className="text-sm text-white/70">Turbo</span>
              <span className="text-xs text-white/60">Charging</span>
            </GlassCard>
            <GlassCard className="absolute z-20 top-[37%] right-[8%] md:top-[47%] md:right-[22%] lg:top-[45%] lg:right-[33%] xl:top-[40%] xl:right-[37%]">
              <span className="text-2xl text-white font-semibold">350</span>
              <span className="text-sm text-white/70">Km</span>
              <span className="text-xs text-white/60">Range</span>
            </GlassCard>
            <GlassCard className="absolute z-20 top-[55%] left-[10%] md:top-[60%] md:left-[22%] lg:top-[65%] lg:left-[32%] xl:top-[65%] xl:left-[37%] 2xl:top-[65%] 2xl:left-[37%]">
              <span className="text-2xl text-white font-semibold">480</span>
              <span className="text-sm text-white/70">Km</span>
              <span className="text-xs text-white/60">Range</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFeatures;
