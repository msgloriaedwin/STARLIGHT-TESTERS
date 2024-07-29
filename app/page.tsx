import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import Slider from "./components/slider";

export default function Home() {
  return <main>
    <Slider mode="volume" />
    <Slider mode="level" />
    <ForgotPasswordForm />
  </main>;
}
