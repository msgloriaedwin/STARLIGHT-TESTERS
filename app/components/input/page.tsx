import React from "react";
import RBInputDoc from "./inputDocs";
import RBInput from ".";
interface InputField {
  label: string;
  placeholder: string;
  error?: string;
  helperText?: string;
}

const inputFields: InputField[] = [
  {
    label: "Team Name",
    placeholder: "Enter your team name",
    error: "Team name is required",
    helperText: "This will be your team's identifier",
  },
  {
    label: "Team Description",
    placeholder: "Enter a brief description",
    error: "Description should be at least 10 characters",
    helperText: "Provide some details about your team",
  },
  {
    label: "Contact Email",
    placeholder: "Enter contact email",
    error: "Please enter a valid email address",
    helperText: "This email will be used for team communications",
  },
];

const page = () => {
  return (
    <div className="p-4 space-y-4">
      {inputFields.map((field, index) => (
        <RBInput
          className="space-y-10"
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          error={field.error}
          helperText={field.helperText}
        />
      ))}

      <RBInputDoc />
    </div>
  );
};

export default page;
