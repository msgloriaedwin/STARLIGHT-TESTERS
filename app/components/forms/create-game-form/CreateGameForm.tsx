"use client";

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
import Image from "next/image";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  teamName: z.string().min(1, { message: "Team Name is required" }),
  bingoType: z.enum(["numbers", "alphabets"]),
  prizeValue: z.string().min(1, { message: "Prize value is required" }),
});

type FormData = z.infer<typeof formSchema>;

const CreateGameForm: React.FC = ({ className }: { className?: string }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className={cn("max-w-[39rem]",className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="bg-[#ACE8FF] p-[0.9rem] sm:p-6 rounded-[0.45rem] sm:rounded-[0.75rem] max-sm:border-[#00A8E8] max-sm:border-l-[0.11rem] max-sm:border-b-[0.11rem] flex flex-col gap-[0.9rem] sm:gap-6"
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
                      className="border border-[#00222E] focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  {form.formState.errors && (
                    <FormMessage className="text-#00222e">
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
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                      <Button
                        className={`flex items-center justify-center py-[0.875rem] px-3 sm:px-6 sm:py-5 cursor-pointer rounded-md w-full bg-[#FFF08C] border border-[#00222E] text-inherit sm:h-14 relative max-sm:text-[0.61rem] max-sm:leading-3 hover:bg-yellow-300`}
                        onClick={() => field.onChange("numbers")}
                      >
                        <Image
                          src={"/icons/numbers.svg"}
                          alt="alphabet group icons"
                          height={24}
                          width={24}
                          className="max-sm:hidden"
                        />
                        <span className="ml-2">Numbers</span>
                        {field.value === "numbers" && (
                          <div className="absolute top-1 right-1">
                            <Image
                              src={"/icons/Check.svg"}
                              alt="Selected"
                              width={16}
                              height={16}
                            />
                          </div>
                        )}
                      </Button>

                      <Button
                        className={`flex items-center justify-center py-[0.875rem] px-3 sm:px-6 sm:py-5 cursor-pointer rounded-md w-full bg-[#D5F3FF] border border-[#00222E] text-inherit sm:h-14 relative max-sm:text-[0.61rem] max-sm:leading-3 hover:bg-blue-200`}
                        onClick={() => field.onChange("alphabets")}
                      >
                        <Image
                          src={"/icons/alphabetss.svg"}
                          alt="alphabet group icons"
                          height={24}
                          width={24}
                          className="max-sm:hidden"
                        />
                        <span className="ml-2">Alphabets</span>
                        {field.value === "alphabets" && (
                          <div className="absolute top-1 right-1">
                            <Image
                              src={"/icons/Check.svg"}
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

          <div>
            <FormField
              control={form.control}
              name="prizeValue"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="teamName"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Prize Value 🏆
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="teamName"
                      placeholder="Name Prize"
                      {...field}
                      className="border border-[#00222E] focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  {form.formState.errors && (
                    <FormMessage className="text-#00222e">
                      {form.formState.errors.prizeValue?.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full sm:h-14 rounded-[0.5rem] bg-[#00658B] text-[#D5F3FF] p-2 border border-[#00A8E8] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.40)_inset,-4px_-4px_0px_0px_rgba(0,0,0,0.32)_inset] hover:filter hover:brightness-125"
          >
            Save & Continue
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateGameForm;
