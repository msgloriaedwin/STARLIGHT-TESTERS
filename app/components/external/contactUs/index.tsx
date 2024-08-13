import { useState } from "react";
import TextInput from "../contactInput";
import SelectInput from "../SelectInput";
import TextArea from "../textArea";
import validator from "../validate";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailEddress: "",
    iUseRemoteBingoAsA: "",
    subject: "",
    description: "",
  });

  const [requiredFormData, setRequiredFormData] = useState({
    name: false,
    emailEddress: false,
    iUseRemoteBingoAsA: false,
    subject: false,
    description: false,
  });

  const handleSubmit = () => {
    const { status, data } = validator(formData, requiredFormData);
    if (status) {
    } else {
      setRequiredFormData((prevData) => {
        return { ...prevData, ...data };
      });
    }
  };

  return (
    <div className="py-8">
      <div className="md:grid grid-cols-2 gap-6 items-center mb-4">
        <TextInput
          label="Name"
          value={formData.name}
          setValue={(data) => {
            setFormData((prevData) => {
              return { ...prevData, name: data };
            });
            if (data) {
              setRequiredFormData((prevData) => {
                return { ...prevData, name: false };
              });
            } else {
              setRequiredFormData((prevData) => {
                return { ...prevData, name: true };
              });
            }
          }}
          placeholder="Enter your name"
          error={requiredFormData.name}
        />
        <TextInput
          label="Email address"
          value={formData.emailEddress}
          setValue={(data) => {
            setFormData((prevData) => {
              return { ...prevData, emailEddress: data };
            });
            if (data) {
              setRequiredFormData((prevData) => {
                return { ...prevData, emailEddress: false };
              });
            } else {
              setRequiredFormData((prevData) => {
                return { ...prevData, emailEddress: true };
              });
            }
          }}
          placeholder="Enter email address"
          error={requiredFormData.emailEddress}
        />
      </div>
      <div className="md:grid  grid-cols-2 gap-6 mb-4">
        <SelectInput
          label="I use remote bingo as a:"
          value={formData.iUseRemoteBingoAsA}
          setValue={(data) => {
            setFormData((prevData) => {
              return { ...prevData, iUseRemoteBingoAsA: data };
            });
            if (data) {
              setRequiredFormData((prevData) => {
                return { ...prevData, iUseRemoteBingoAsA: false };
              });
            } else {
              setRequiredFormData((prevData) => {
                return { ...prevData, iUseRemoteBingoAsA: true };
              });
            }
          }}
          placeholder=""
          error={requiredFormData.iUseRemoteBingoAsA}
          data={[
            "Remote team",
            "Name",
            "Family",
            "Student",
            "Educator",
            "Social group",
            "Other",
          ]}
        />
        <TextInput
          label="Subject"
          value={formData.subject}
          setValue={(data) => {
            setFormData((prevData) => {
              return { ...prevData, subject: data };
            });
            if (data) {
              setRequiredFormData((prevData) => {
                return { ...prevData, subject: false };
              });
            } else {
              setRequiredFormData((prevData) => {
                return { ...prevData, subject: true };
              });
            }
          }}
          placeholder="Enter subject"
          error={requiredFormData.subject}
        />
      </div>
      <div className="md:grid  grid-cols-2 gap-6 mb-4">
        <TextArea
          label="Description"
          value={formData.description}
          setValue={(data) => {
            setFormData((prevData) => {
              return { ...prevData, description: data };
            });
            if (data) {
              setRequiredFormData((prevData) => {
                return { ...prevData, description: false };
              });
            } else {
              setRequiredFormData((prevData) => {
                return { ...prevData, description: true };
              });
            }
          }}
          placeholder=""
          error={requiredFormData.description}
        />
      </div>
      <div className="flex items-center md:justify-end w-full">
        <div className="md:w-[10rem]">
          <Button
            type="submit"
            className="w-full sm:h-14 rounded-[0.5rem] bg-primary-700 hover:bg-primary-700 text-primary-100  border border-primary-500 shadow-custom-inset "
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
