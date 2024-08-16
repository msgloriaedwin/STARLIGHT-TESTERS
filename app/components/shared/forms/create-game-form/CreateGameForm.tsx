"use client";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import Image, {StaticImageData} from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import AvatarSelector from "./AvatarSelector";
import {useCreateGameRoom} from "@/hooks/useApiMutations";
import {useToast} from "@/components/ui/use-toast";
import {Toaster} from "@/components/ui/toaster";

const formSchema = z.object({
  userName: z.string().min(1, {message: "Username is required"}),
  teamName: z.string().min(1, {message: "Team Name is required"}),
  bingoType: z.enum(["number", "alphabets"]),
  prizeValue: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Prize value must be a number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Prize value must be greater than zero",
    }),
  avatar: z.string(),
});
type FormData = z.infer<typeof formSchema>;
interface CreateGameFormProps {
  avatars: StaticImageData[];
  className?: string;
}
const CreateGameForm: React.FC<CreateGameFormProps> = ({
  avatars,
  className,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<StaticImageData>(
    avatars[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessage] = useState("");
  const router = useRouter();
  const createGameMutation = useCreateGameRoom();
  const {toast} = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      bingoType: "number",
      prizeValue: undefined,
      avatar: avatars[0].src,
    },
  });

  const handleFormSubmit = async (data: FormData) => {
    const payload = {
      userName: data.userName,
      teamName: data.teamName,
      bingoType: data.bingoType,
      prizeValue: data.prizeValue.toString(),
      avatar: data.avatar,
    };

    createGameMutation.mutate(payload, {
      onSuccess: (response) => {
        if (response.status_code === 201) {
          router.push(`room/game-room?roomId=${response.data.id}`);
        } else {
          toast({
            title: "Failed to create a room",
            description: response.error,
            variant: "destructive",
            className:
              "bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 shadow-md",
          });

          setErrorMessage(response.message || "An unexpected error occurred.");
        }
      },
      onError: (error: any) => {
        setErrorMessage(
          error.message || "An error occurred. Please try again."
        );
      },
    });
  };

  const handleAvatarSelect = (avatar: StaticImageData) => {
    setSelectedAvatar(avatar);
    form.setValue("avatar", avatar.src);
  };
  return (
    <>
      <section className={cn("max-w-[39rem]", className)}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="bg-primary-200 p-[0.9rem] sm:p-6 rounded-[0.45rem] sm:rounded-[0.75rem] max-sm:border-primary-500 max-sm:border-l-[0.11rem] max-sm:border-b-[0.11rem] flex flex-col gap-[0.9rem] sm:gap-6"
          >
            <div>
              <FormField
                control={form.control}
                name="userName"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel
                      htmlFor="Username"
                      className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                    >
                      User Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="userName"
                        placeholder="User Name"
                        {...field}
                        className="border border-primary-900 focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                        required
                      />
                    </FormControl>
                    {form.formState.errors && (
                      <FormMessage className="text-primary-900">
                        {form.formState.errors.userName?.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="teamName"
                render={({field}) => (
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
                defaultValue="number"
                render={({field}) => (
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
                            field.value === "number"
                              ? "bg-yellow-300"
                              : "bg-primary-100"
                          )}
                          onClick={() => field.onChange("number")}
                        >
                          <Image
                            src={"assets/icons/numbers.svg"}
                            alt="alphabet group icons"
                            height={24}
                            width={24}
                            className="max-sm:hidden"
                          />
                          <span className="ml-2">Numbers</span>
                          {field.value === "number" && (
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
                            field.value === "number"
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
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel
                      htmlFor="prizeValue"
                      className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                    >
                      What&apos;s the Prize? :trophy:
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
            {createGameMutation.isError && (
              <p className="font-normal sm:text-[1rem] text-[0.6rem] max-sm:leading-3">
                {createGameMutation.error?.message ||
                  "An error occurred. Please try again."}
              </p>
            )}
            <Button
              type="submit"
              className="w-full sm:h-14 rounded-[0.5rem] bg-primary-700 hover:bg-primary-700 text-primary-100 p-2 border border-primary-500 shadow-custom-inset "
              disabled={isLoading}
            >
              Save & Continue
            </Button>
          </form>
        </Form>
      </section>
      <Toaster />
    </>
  );
};

export default CreateGameForm;
