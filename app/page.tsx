import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import CardSelectionNavbar from "./components/navbars/custom-navbars/CardSelectionNavbar";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";
import SignUpNavbar from "./components/navbars/custom-navbars/signUpNavbar";
import Slider from "./components/slider";

export default function Home() {
  return <main>
    <Slider mode="volume" />
    <Slider mode="level" />
    <ForgotPasswordForm />
  </main>;
}
