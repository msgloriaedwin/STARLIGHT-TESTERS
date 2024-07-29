import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";

export default function Home() {
  return <main>
    <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
      <OtpComponent email="amin***@gmail.com"/>
    </div>
    <Slider mode="volume"/>
      <ForgotPasswordForm/>
      {/* <ChooseAvatarField setAvatarUrl}/> */}

      

  </main>;
}
