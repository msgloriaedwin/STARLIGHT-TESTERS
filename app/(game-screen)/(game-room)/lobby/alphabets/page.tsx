"use client";
import CreateGameNavbar from "@/app/components/navbars/custom-navbars/CreateGameNavbar";
import AlphabetLayoutContainer from "@/app/container/alphabetLayoutContainer";

const page = () => {
  return (
    <div>
      <CreateGameNavbar showCup={true} />
      <AlphabetLayoutContainer />
    </div>
  );
};

export default page;
