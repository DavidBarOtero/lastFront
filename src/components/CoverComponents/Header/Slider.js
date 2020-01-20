import React from "react";
import BackgroundSlider from "react-background-slider";
import foto1 from "./../../../assets/images/Cover/slider/1.jpg";
import foto2 from "./../../../assets/images/Cover/slider/2.jpg";
import foto3 from "./../../../assets/images/Cover/slider/3.jpg";

const Slider = () => {
  return (
    <BackgroundSlider
      images={[foto1, foto2, foto3]}
      duration={6}
      transition={1}
      style={{ height: "4rem" }}
    />
  );
};

export { Slider };
