import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const selectedRole = (data: string) => {
  let role: string = "";
  if (data === "Remote team") {
    role = "remote_team";
  } else if (data === "Family") {
    role = "family";
  } else if (data === "Student") {
    role = "student";
  } else if (data === "Educator") {
    role = "educator";
  } else if (data === "Social group") {
    role = "social_group";
  } else {
    role = "other";
  }
  return role;
};
export const contactUs = async (data: any) => {
  if (data) {
    try {
      const response = await axios.post(`${baseUrl}contact`, {
        name: data.name,
        email: data.emailEddress,
        role: selectedRole(data.iUseRemoteBingoAsA),
        subject: data.subject,
        description: data.description,
      });
      return response;
    } catch (error) {
      console.error(error);
      return;
    }
  }
};
