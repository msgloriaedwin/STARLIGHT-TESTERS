import BingoMaster from "./BingoMaster";
import CardSelection from "./CardSelection";

export default function GamePlay() {
  return (
    <div className="flex flex-col">
      <BingoMaster />
      <CardSelection />
    </div>
  );
}
