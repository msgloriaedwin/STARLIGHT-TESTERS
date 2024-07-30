"use client";
import React, { useState } from "react";
import RBButton from "./button";

const RBButtonDocs = () => {
  const [basicProps, setBasicProps] = useState({ label: "Click Me" });
  const [disabledProps, setDisabledProps] = useState({
    label: "Disabled Button",
    disabled: true,
  });
  const [loadingProps, setLoadingProps] = useState({
    label: "Loading",
    isLoading: true,
  });
  const [iconProps, setIconProps] = useState({
    label: "Button with Icon",
    icon: "🔍",
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        RBButton Component Documentation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">
          The <code>RBButton</code> component provides a customizable button
          element that can include labels, icons, loading states, and more.
          It&apos;s designed to be accessible and easy to use, with support for
          different styles, sizes, and states.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Props</h2>
        <ul className="text-gray-700 list-disc pl-5">
          <li>
            <strong>variant</strong>: Specifies the button style. Options
            include <code>&quot;primary&quot;</code>,{" "}
            <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>,
            and <code>&quot;primaryOutline&quot;</code>. Default is{" "}
            <code>&quot;primary&quot;</code>.
          </li>
          <li>
            <strong>size</strong>: Specifies the button size. Options include{" "}
            <code>&quot;small&quot;</code>, <code>&quot;medium&quot;</code>, and{" "}
            <code>&quot;large&quot;</code>. Default is{" "}
            <code>&quot;medium&quot;</code>.
          </li>
          <li>
            <strong>icon</strong>: A React node to display as an icon on the
            button.
          </li>
          <li>
            <strong>isLoading</strong>: Boolean to show a loading state. When
            true, the button displays a loading spinner or message. Default is{" "}
            <code>false</code>.
          </li>
          <li>
            <strong>disabled</strong>: Boolean to disable the button. When true,
            the button is non-interactive and styled accordingly. Default is{" "}
            <code>false</code>.
          </li>
          <li>
            <strong>className</strong>: Additional custom styles for the button.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Example Usage</h2>
        <p className="text-gray-700 mb-4">
          Below are some examples demonstrating how to use the{" "}
          <code>RBButton</code>
          component in various scenarios:
        </p>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">Basic Usage</h3>
          <RBButton>{basicProps.label}</RBButton>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={basicProps.label}
              onChange={(e) => setBasicProps({ label: e.target.value })}
              className="border p-2 mb-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBButton>
  ${basicProps.label}
</RBButton>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">Disabled State</h3>
          <RBButton disabled={disabledProps.disabled}>
            {disabledProps.label}
          </RBButton>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={disabledProps.label}
              onChange={(e) =>
                setDisabledProps({ ...disabledProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <label className="block mb-2">
              <input
                type="checkbox"
                checked={disabledProps.disabled}
                onChange={(e) =>
                  setDisabledProps({
                    ...disabledProps,
                    disabled: e.target.checked,
                  })
                }
              />
              Disabled
            </label>
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBButton disabled={${disabledProps.disabled}}>
  ${disabledProps.label}
</RBButton>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">Loading State</h3>
          <RBButton isLoading={loadingProps.isLoading}>
            {loadingProps.label}
          </RBButton>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={loadingProps.label}
              onChange={(e) =>
                setLoadingProps({ ...loadingProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <label className="block mb-2">
              <input
                type="checkbox"
                checked={loadingProps.isLoading}
                onChange={(e) =>
                  setLoadingProps({
                    ...loadingProps,
                    isLoading: e.target.checked,
                  })
                }
              />
              Loading
            </label>
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBButton isLoading={${loadingProps.isLoading}}>
  ${loadingProps.label}
</RBButton>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">Button with Icon</h3>
          <RBButton icon={iconProps.icon}>{iconProps.label}</RBButton>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={iconProps.label}
              onChange={(e) =>
                setIconProps({ ...iconProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Icon"
              value={iconProps.icon}
              onChange={(e) =>
                setIconProps({ ...iconProps, icon: e.target.value })
              }
              className="border p-2 mb-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBButton icon={${iconProps.icon}}>
  ${iconProps.label}
</RBButton>`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Variants & Sizes</h2>
        <p className="text-gray-700 mb-4">
          The <code>RBButton</code> component supports different visual styles
          and sizes. The following examples showcase the various combinations of
          variants and sizes available:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-md bg-gray-50">
            <h3 className="text-xl font-medium mb-2">Primary Variant</h3>
            <RBButton variant="primary" size="small">
              Small
            </RBButton>
            <RBButton variant="primary" size="medium" className="ml-2">
              Medium
            </RBButton>
            <RBButton variant="primary" size="large" className="ml-2">
              Large
            </RBButton>
          </div>
          <div className="border p-4 rounded-md bg-gray-50">
            <h3 className="text-xl font-medium mb-2">Secondary Variant</h3>
            <RBButton variant="secondary" size="small">
              Small
            </RBButton>
            <RBButton variant="secondary" size="medium" className="ml-2">
              Medium
            </RBButton>
            <RBButton variant="secondary" size="large" className="ml-2">
              Large
            </RBButton>
          </div>
          <div className="border p-4 rounded-md bg-gray-50">
            <h3 className="text-xl font-medium mb-2">Danger Variant</h3>
            <RBButton variant="danger" size="small">
              Small
            </RBButton>
            <RBButton variant="danger" size="medium" className="ml-2">
              Medium
            </RBButton>
            <RBButton variant="danger" size="large" className="ml-2">
              Large
            </RBButton>
          </div>
          <div className="border p-4 rounded-md bg-gray-50">
            <h3 className="text-xl font-medium mb-2">Outline Variant</h3>
            <RBButton variant="primaryOutline" size="small">
              Small
            </RBButton>
            <RBButton variant="primaryOutline" size="medium" className="ml-2">
              Medium
            </RBButton>
            <RBButton variant="primaryOutline" size="large" className="ml-2">
              Large
            </RBButton>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Styling & Accessibility</h2>
        <p className="text-gray-700">
          The <code>RBButton</code> component uses utility classes for styling,
          ensuring flexibility and consistency. It includes features like ARIA
          attributes for accessibility, making it suitable for all users. Ensure
          that buttons have sufficient color contrast and are keyboard
          navigable.
        </p>
        <p className="text-gray-700">
          The components styling can be customized by passing additional classes
          via the <code>className</code> prop. This allows for easy integration
          with different design systems or frameworks.
        </p>
      </section>
    </div>
  );
};

export default RBButtonDocs;
