import showingCard from "@/public/showing-card.json";
import Lottie from "react-lottie";
export default function CallingCard() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: showingCard,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={175} />;
}
