import React from "react";
import RBCustomSlider from "@/app/components/slider";
import RBCustomSliderDocPage from "@/app/components/slider/sliderDocs";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto p-4 space-y-6">
        <RBCustomSlider mode="volume" />
        <RBCustomSlider mode="level" />
        {/* <RBCustomSliderDocPage /> */}
      </div>
    </div>
  );
};

export default page;
