import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const initialAlphabets: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AlphabetCardProps {
  letter: string;
  isSelected: boolean;
  onClick: () => void;
}

interface SelectedLetterCardProps {
  letter: string;
  onRemove: () => void;
}

const AlphabetCard: React.FC<AlphabetCardProps> = ({
  letter,
  isSelected,
  onClick,
}) => (
  <Card
    className={`w-10 h-14 flex items-center justify-center cursor-pointer ${
      isSelected ? "bg-blue-200 shadow-md" : "bg-white"
    }`}
    onClick={onClick}
  >
    <CardContent className="p-0">
      <p className="text-2xl font-bold">{letter}</p>
    </CardContent>
  </Card>
);

const SelectedLetterCard: React.FC<SelectedLetterCardProps> = ({
  letter,
  onRemove,
}) => (
  <Card
    className="w-10 h-14 flex items-center justify-center bg-blue-200 cursor-pointer"
    onClick={onRemove}
  >
    <CardContent className="p-0">
      <p className="text-2xl font-bold">{letter || "+"}</p>
    </CardContent>
  </Card>
);

const AlphabetSelectionLobby: React.FC = () => {
  const [alphabetArray, setAlphabetArray] =
    useState<string[]>(initialAlphabets);
  const [selectedLetters, setSelectedLetters] = useState<string[]>(
    Array(8).fill("")
  );
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);

  useEffect(() => {
    const storedLetters = sessionStorage.getItem("userSelectedLetters");
    const storedAlphabets = sessionStorage.getItem("storedAlphabets");
    if (storedLetters && storedAlphabets) {
      setSelectedLetters(JSON.parse(storedLetters));
      setAlphabetArray(JSON.parse(storedAlphabets));
      setRevealedIndices(
        JSON.parse(storedLetters)
          .map((letter: string, index: number) => (letter ? index : null))
          .filter((i: number | null): i is number => i !== null)
      );
    }
  }, []);

  useEffect(() => {
    if (revealedIndices.length === 8) {
      sessionStorage.setItem(
        "userSelectedLetters",
        JSON.stringify(selectedLetters)
      );
      sessionStorage.setItem("storedAlphabets", JSON.stringify(alphabetArray));
    }
  }, [revealedIndices, selectedLetters, alphabetArray]);

  const selectLetter = (index: number) => {
    if (revealedIndices.length === 8) return;

    const letter = alphabetArray[index];
    setRevealedIndices((prev) => [...prev, index]);
    setSelectedLetters((prev) => {
      const newArray = [...prev];
      const emptyIndex = newArray.findIndex((item) => item === "");
      if (emptyIndex !== -1) {
        newArray[emptyIndex] = letter;
      }
      return newArray;
    });
  };

  const removeLetter = (index: number) => {
    const letter = selectedLetters[index];
    setSelectedLetters((prev) => {
      const newArray = [...prev];
      newArray[index] = "";
      return newArray;
    });
    setRevealedIndices((prev) =>
      prev.filter((i) => alphabetArray[i] !== letter)
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-center text-blue-800">
            Select your letters
          </h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-9 gap-2 mb-8">
            {alphabetArray.map((letter, index) => (
              <AlphabetCard
                key={index}
                letter={letter}
                isSelected={revealedIndices.includes(index)}
                onClick={() => selectLetter(index)}
              />
            ))}
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Your letters</h3>
          <div className="flex justify-center gap-2">
            {selectedLetters.map((letter, index) => (
              <SelectedLetterCard
                key={index}
                letter={letter}
                onRemove={() => removeLetter(index)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlphabetSelectionLobby;
