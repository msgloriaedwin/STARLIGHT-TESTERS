import LetterCardSelection from "@/app/components/gamecardselection/LetterCardSelection";
import CreateGameNavbar from "@/app/components/navbars/custom-navbars/CreateGameNavbar";
import AlphabetLayoutContainer from "./alphabetLayoutContainer";

const page = () => {
  return (
    <div>
      <CreateGameNavbar />
      <AlphabetLayoutContainer />
    </div>
  );
};

export default page;
