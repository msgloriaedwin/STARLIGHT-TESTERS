"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import AvatarSelector from "./AvatarSelector";

const formSchema = z.object({
  teamName: z.string().min(1, { message: "Team Name is required" }),
  bingoType: z.enum(["numbers", "alphabets"]),
  prizeValue: z.string().min(1, { message: "Prize value is required" }),
  avatar: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface CreateGameFormProps {
  avatars: StaticImageData[];
  className?: string;
  onSubmit?: (data: FormData) => void;
}

const CreateGameForm: React.FC<CreateGameFormProps> = ({
  avatars,
  className,
  onSubmit,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<StaticImageData>(
    avatars[0]
  );
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      bingoType: "numbers",
      prizeValue: "",
      avatar: avatars[0].src,
    },
  });

  const handleFormSubmit = (data: FormData) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleAvatarSelect = (avatar: StaticImageData) => {
    setSelectedAvatar(avatar);
    form.setValue("avatar", avatar.src);
  };

  return (
    <section className={cn("max-w-[39rem]", className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="bg-primary-200 p-[0.9rem] sm:p-6 rounded-[0.45rem] sm:rounded-[0.75rem] max-sm:border-primary-500 max-sm:border-l-[0.11rem] max-sm:border-b-[0.11rem] flex flex-col gap-[0.9rem] sm:gap-6"
        >
          <div>
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="teamName"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Team Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="teamName"
                      placeholder="Team Name"
                      {...field}
                      className="border border-primary-900 focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  {form.formState.errors && (
                    <FormMessage className="text-primary-900">
                      {form.formState.errors.teamName?.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              name="bingoType"
              control={form.control}
              defaultValue="numbers"
              render={({ field }) => (
                <>
                  <FormItem className="flex flex-col">
                    <FormLabel
                      htmlFor="bingoType"
                      className="font-normal sm:text-[1rem] text-[0.6rem] max-sm:leading-3"
                    >
                      Bingo Type
                    </FormLabel>
                    <div className="flex flex-row justify-between gap-3">
                      <Button
                        className={cn(
                          "flex items-center justify-center py-[0.875rem] px-3 sm:px-6 sm:py-5 cursor-pointer rounded-md w-full border border-primary-900 text-inherit sm:h-14 relative max-sm:text-[0.61rem] max-sm:leading-3",
                          field.value === "numbers"
                            ? "bg-yellow-300"
                            : "bg-primary-100"
                        )}
                        onClick={() => field.onChange("numbers")}
                      >
                        <Image
                          src={"assets/icons/numbers.svg"}
                          alt="alphabet group icons"
                          height={24}
                          width={24}
                          className="max-sm:hidden"
                        />
                        <span className="ml-2">Numbers</span>
                        {field.value === "numbers" && (
                          <div className="absolute top-1 right-1">
                            <Image
                              src={"assets/icons/Check.svg"}
                              alt="Selected"
                              width={16}
                              height={16}
                            />
                          </div>
                        )}
                      </Button>

                      <Button
                        className={cn(
                          "flex items-center justify-center py-[0.875rem] px-3 sm:px-6 sm:py-5 cursor-pointer rounded-md w-full border border-primary-900 text-inherit sm:h-14 relative max-sm:text-[0.61rem] max-sm:leading-3",
                          field.value === "numbers"
                            ? "bg-primary-100"
                            : "bg-yellow-300"
                        )}
                        onClick={() => field.onChange("alphabets")}
                      >
                        <Image
                          src={"assets/icons/alphabetss.svg"}
                          alt="alphabet group icons"
                          height={24}
                          width={24}
                          className="max-sm:hidden"
                        />
                        <span className="ml-2">Alphabets</span>
                        {field.value === "alphabets" && (
                          <div className="absolute top-1 right-1">
                            <Image
                              src={"assets/icons/Check.svg"}
                              alt="Selected"
                              width={16}
                              height={16}
                            />
                          </div>
                        )}
                      </Button>
                    </div>
                  </FormItem>
                </>
              )}
            />
          </div>

          <AvatarSelector
            avatars={avatars}
            selectedAvatar={selectedAvatar}
            onAvatarSelect={handleAvatarSelect}
          />

          <div>
            <FormField
              control={form.control}
              name="prizeValue"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="prizeValue"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    What&apos;s the Prize? 🏆
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="prizeValue"
                      placeholder="Name Prize"
                      {...field}
                      className="border border-primary-900   sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  {form.formState.errors && (
                    <FormMessage className="text-primary-900">
                      {form.formState.errors.prizeValue?.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full sm:h-14 rounded-[0.5rem] bg-primary-700 hover:bg-primary-700 text-primary-100 p-2 border border-primary-500 shadow-custom-inset "
          >
            Save & Continue
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateGameForm;
