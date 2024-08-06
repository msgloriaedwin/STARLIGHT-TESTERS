import React from "react";
import CustomButton from "@/app/components/button/custombutton";
import FormCard from "@/app/components/formcard/formCard";
import Link from "next/link";
import ForgotPasswordNavbar from "@/app/components/navbars/custom-navbars/ForgotPasswordNavbar";

const PasswordResetSuccess = () => {

  return (
    <>
    <ForgotPasswordNavbar/>
      <div className='bg-body flex flex-col h-screen justify-center items-center'>
        <div className='mb-6 text-center'>
          <h3 className='text-2xl md:text-4xl mb-2'>Password Reset</h3>
          <p className='text-sm md:text-lg'>
          Your password has been successfully reset. Click below to proceed to the game
          </p>
        </div>
        <FormCard>
          <CustomButton size={"lg"} className='w-full p-7'>
            Continue
          </CustomButton>

          <Link
            href={"/auth/login"}
            className='underline flex justify-center my-4'
          >
            Back to sign in
          </Link>
        </FormCard>
      </div>
    </>
  );
};

export default PasswordResetSuccess;
