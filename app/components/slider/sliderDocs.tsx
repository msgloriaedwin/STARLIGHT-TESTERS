import React from "react";

const RBCustomSliderDocPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        RBCustomSlider Component Documentation
      </h1>

      <section className="mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Description
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          <code>RBCustomSlider</code> is a customizable slider component for
          React applications. It supports two modes, <code>volume</code> and{" "}
          <code>level</code>, each offering different functionality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Props</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>mode</strong> (required): <code>volume | level</code>
            <p className="text-sm md:text-base lg:text-lg">
              Determines the behavior and labeling of the slider.
            </p>
          </li>
          <li className="mb-2">
            <strong>initialValue</strong> (optional): <code>number[]</code>
            <p className="text-sm md:text-base lg:text-lg">
              Default value: <code>[50]</code>. The initial value of the slider.
            </p>
          </li>
          <li className="mb-2">
            <strong>max</strong> (optional): <code>number</code>
            <p className="text-sm md:text-base lg:text-lg">
              Default value: <code>100</code>. The maximum value of the slider.
            </p>
          </li>
          <li className="mb-2">
            <strong>step</strong> (optional): <code>number</code>
            <p className="text-sm md:text-base lg:text-lg">
              Default value: <code>1</code>. Defines the increment value for the
              slider.
            </p>
          </li>
          <li className="mb-2">
            <strong>label</strong> (optional): <code>string</code>
            <p className="text-sm md:text-base lg:text-lg">
              A label displayed above the slider.
            </p>
          </li>
          <li className="mb-2">
            <strong>onValueChange</strong> (optional):{" "}
            <code>(newValue: number[]) =&gt void</code>
            <p className="text-sm md:text-base lg:text-lg">
              A callback function triggered whenever the slider value changes.
            </p>
          </li>
          <li className="mb-2">
            <strong>theme</strong> (optional): <code>object</code>
            <p className="text-sm md:text-base lg:text-lg">
              An object to customize the appearance.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Example Usage
        </h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {`
import React from "react";
import RBCustomSlider from "@/components/UI/justTesting";

const ExamplePage = () => {
  const handleVolumeChange = (newValue: number[]) => {
  };

  const handleLevelChange = (newValue: number[]) => {
  };

  return (
    <div className="container mx-auto p-4">
      <RBCustomSlider
        mode="volume"
        initialValue={[30]}
        onValueChange={handleVolumeChange}
        label="Set Volume"
      />
      <RBCustomSlider
        mode="level"
        initialValue={[50]}
        onValueChange={handleLevelChange}
        label="Difficulty Level"
      />
    </div>
  );
};

export default ExamplePage;
          `}
        </pre>
      </section>
    </div>
  );
};

export default RBCustomSliderDocPage;
