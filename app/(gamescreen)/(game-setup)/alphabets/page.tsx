"use client";
import CreateGameNavbar from "@/app/components/navbars/custom-navbars/CreateGameNavbar";
import AlphabetLayoutContainer from "./alphabetLayoutContainer";

const page = () => {
  return (
    <div>
      <CreateGameNavbar showCup={true} />
      <AlphabetLayoutContainer />
    </div>
  );
};

export default page;
