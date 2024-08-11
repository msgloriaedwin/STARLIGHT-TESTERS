"use client";
import React, { useState } from "react";
import RBInput from ".";

const RBInputDocs = () => {
  const [basicProps, setBasicProps] = useState({
    label: "Username",
    placeholder: "Enter your username",
  });
  const [errorProps, setErrorProps] = useState({
    label: "Email",
    placeholder: "Enter your email",
    error: "Email is required",
  });
  const [helperProps, setHelperProps] = useState({
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Password must be at least 8 characters long.",
  });
  const [allProps, setAllProps] = useState({
    label: "Phone Number",
    placeholder: "Enter your phone number",
    error: "Invalid phone number",
    helperText: "Include your country code.",
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        RBInput Component Documentation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">
          The <code>RBInput</code> component provides a customizable input field
          with support for labels, error messages, and helper text. It is
          designed to enhance form accessibility and user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Example Usage</h2>
        <p className="text-gray-700 mb-4">
          Below are some examples demonstrating how to use the{" "}
          <code>RBInput</code> component in various scenarios:
        </p>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">Basic Usage</h3>
          <RBInput {...basicProps} />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={basicProps.label}
              onChange={(e) =>
                setBasicProps({ ...basicProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Placeholder"
              value={basicProps.placeholder}
              onChange={(e) =>
                setBasicProps({ ...basicProps, placeholder: e.target.value })
              }
              className="border p-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBInput
  label="${basicProps.label}"
  placeholder="${basicProps.placeholder}"
/>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">With Error Message</h3>
          <RBInput {...errorProps} />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={errorProps.label}
              onChange={(e) =>
                setErrorProps({ ...errorProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Placeholder"
              value={errorProps.placeholder}
              onChange={(e) =>
                setErrorProps({ ...errorProps, placeholder: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Error"
              value={errorProps.error}
              onChange={(e) =>
                setErrorProps({ ...errorProps, error: e.target.value })
              }
              className="border p-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBInput
  label="${errorProps.label}"
  placeholder="${errorProps.placeholder}"
  error="${errorProps.error}"
/>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">With Helper Text</h3>
          <RBInput {...helperProps} />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={helperProps.label}
              onChange={(e) =>
                setHelperProps({ ...helperProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Placeholder"
              value={helperProps.placeholder}
              onChange={(e) =>
                setHelperProps({ ...helperProps, placeholder: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Helper Text"
              value={helperProps.helperText}
              onChange={(e) =>
                setHelperProps({ ...helperProps, helperText: e.target.value })
              }
              className="border p-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBInput
  label="${helperProps.label}"
  placeholder="${helperProps.placeholder}"
  helperText="${helperProps.helperText}"
/>`}
          </pre>
        </div>

        <div className="border p-4 rounded-md bg-gray-50 mb-8">
          <h3 className="text-xl font-medium mb-2">With All Features</h3>
          <RBInput {...allProps} />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Label"
              value={allProps.label}
              onChange={(e) =>
                setAllProps({ ...allProps, label: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Placeholder"
              value={allProps.placeholder}
              onChange={(e) =>
                setAllProps({ ...allProps, placeholder: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Error"
              value={allProps.error}
              onChange={(e) =>
                setAllProps({ ...allProps, error: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Helper Text"
              value={allProps.helperText}
              onChange={(e) =>
                setAllProps({ ...allProps, helperText: e.target.value })
              }
              className="border p-2"
            />
          </div>
          <pre className="mt-4 p-2 bg-gray-800 text-white rounded">
            {`<RBInput
  label="${allProps.label}"
  placeholder="${allProps.placeholder}"
  error="${allProps.error}"
  helperText="${allProps.helperText}"
/>`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Subcomponents</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">RBInputLabel</h3>
          <p className="text-gray-700">
            Displays the label text for the input field.
          </p>
          <pre className="mt-2 p-2 bg-gray-800 text-white rounded">
            {`<RBInputLabel label="Email" />`}
          </pre>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">RBInputErrorMessage</h3>
          <p className="text-gray-700">
            Displays an error message when validation fails.
          </p>
          <pre className="mt-2 p-2 bg-gray-800 text-white rounded">
            {`<RBInputErrorMessage error="This field is required" />`}
          </pre>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">RBInputHelperText</h3>
          <p className="text-gray-700">
            Provides additional guidance or information about the input field.
          </p>
          <pre className="mt-2 p-2 bg-gray-800 text-white rounded">
            {`<RBInputHelperText helperText="Your password must include at least one number." />`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Styling & Accessibility</h2>
        <p className="text-gray-700">
          The <code>RBInput</code> component uses utility classes for styling,
          ensuring flexibility and consistency. The component is designed with
          accessibility in mind, including features like{" "}
          <code>aria-invalid</code> for indicating errors.
        </p>
      </section>
    </div>
  );
};

export default RBInputDocs;
