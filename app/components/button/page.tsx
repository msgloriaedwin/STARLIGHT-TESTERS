"use client";
import React from "react";
import {
  ArrowBigLeft,
  ArrowLeft,
  ChevronDown,
  Info,
  LucideLink,
  User,
} from "lucide-react";
import ButtonDocs from "./ButtonDocs";
import RBButton from "./button";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-20 space-y-4">
      <RBButton onClick={() => console.log("first")} variant={"danger"}>
        Hello, How are you
      </RBButton>
      <RBButton
        icon={<Info />}
        onClick={() => console.log("first")}
        variant={"primary"}
      >
        Hello, How are you
      </RBButton>
      <RBButton
        icon={<Info />}
        rightIcon={<LucideLink />}
        onClick={() => console.log("first")}
        variant={"primary"}
      >
        Hello, How are you
      </RBButton>
      <RBButton
        icon={<User />}
        rightIcon={<ChevronDown />}
        onClick={() => console.log("first")}
        variant={"primary"}
      >
        Stephen
      </RBButton>
      <RBButton onClick={() => console.log("first")} variant={"secondary"}>
        Hello, How are you
      </RBButton>
      <RBButton onClick={() => console.log("first")} variant={"primaryOutline"}>
        Hello, How are you
      </RBButton>
      <RBButton
        icon={<ArrowLeft />}
        onClick={() => console.log("first")}
        variant={"primaryOutline"}
      >
        Back
      </RBButton>

      <ButtonDocs />
    </div>
  );
};

export default page;
