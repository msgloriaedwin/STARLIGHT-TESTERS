import Image from "next/image";
import TestFile from "./components/testFile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestFile />
    </main>
  );
}
