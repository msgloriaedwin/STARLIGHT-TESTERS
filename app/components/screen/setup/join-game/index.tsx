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
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AvatarSelector from "../create-game/AvatarSelector";
import CustomButton from "@/app/components/shared/button/custombutton";
import { useToast } from "@/components/ui/use-toast";
import { JoinGameRoomPayload, JoinRoomResponseDTO } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinGameRoom } from "@/actions";

const formSchema = z.object({
  gameId: z.string().min(1, { message: "Game ID is required" }),
  userName: z.string().min(1, { message: "Username is required" }),
  avatar: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const JoinGameForm = ({
  avatars,
  className,
  gameId,
}: {
  avatars: StaticImageData[];
  className?: string;
  gameId: string;
}) => {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState<StaticImageData>(
    avatars[0]
  );
  const { toast } = useToast();
  const joinRoomMutation = useJoinRoom();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameId: gameId || "",
      userName: "",
      avatar: avatars[0].src,
    },
  });

  const handleFormSubmit = async (data: FormData) => {
    const payload: JoinGameRoomPayload = {
      roomId: data.gameId,
      guestSession: {
        guestName: data.userName,
        avatarUrl: data.avatar,
      },
    };
    console.log("Submitting payload:", payload);

    joinRoomMutation.mutate(payload, {
      onSuccess: (response: JoinRoomResponseDTO) => {
        console.log("Server response:", response);
        if (response && response.status_code === 201) {
          toast({
            title: "Success",
            description: "You have successfully joined the game!",
            className:
              "bg-green-100 text-green-800 border border-green-300 rounded-lg p-4 shadow-md",
            duration: 5000,
          });
            
          router.push(`/room/game-room?roomId=${data.gameId}`);
        } else {
          toast({
            title: "Error",
            description: "Unexpected response from the server.",
            className:
              "bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 shadow-md",
            duration: 5000,
          });
        }
      },
      onError: (error: any) => {
        console.error("Failed to join game:", error);
        toast({
          title: "Error",
          description: "Failed to join the game. Please try again.",
          className:
            "bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 shadow-md",
          duration: 5000,
        });
      },
    });
  };

  const handleAvatarSelect = (avatar: StaticImageData) => {
    setSelectedAvatar(avatar);
    form.setValue("avatar", avatar.src);
  };

  return (
    <section className="w-[95%] md:max-w-[39rem]">
      <h3 className="font-[700] text-[50px] text-center mb-[37px]">
        Join Game
      </h3>
      <div className={cn("bg-primary-300 rounded-[12px]", className)}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="bg-form-blue p-[0.9rem] sm:p-6 rounded-[0.45rem] sm:rounded-[0.75rem] flex flex-col gap-[0.9rem] sm:gap-6"
          >
            <FormField
              control={form.control}
              name="gameId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="gameId"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Game ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="gameId"
                      placeholder="Enter game ID"
                      {...field}
                      className={cn(
                        "border focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5",
                        form.formState.errors.gameId
                          ? "border-red-500"
                          : "border-primary-900"
                      )}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage className="text-primary-900">
                    {form.formState.errors.gameId?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="userName"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="userName"
                      placeholder="Enter username"
                      {...field}
                      className={cn(
                        "border focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5",
                        form.formState.errors.userName
                          ? "border-red-500"
                          : "border-primary-900"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-primary-900">
                    {form.formState.errors.userName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <AvatarSelector
              avatars={avatars}
              selectedAvatar={selectedAvatar}
              onAvatarSelect={handleAvatarSelect}
            />
            <CustomButton
              variant="secondary"
              type="submit"
              isDisabled={joinRoomMutation.isPending}
            >
              {joinRoomMutation.isPending ? "Joining..." : "Join Game"}
            </CustomButton>
            {joinRoomMutation.isError && (
              <p className="text-red-500 text-center mt-2">
                {
                // joinRoomMutation.error?.message ||
                  "An error occurred while joining the game."}
              </p>
            )}
          </form>
        </Form>
      </div>
    </section>
  );
};

export default JoinGameForm;

export const useJoinRoom = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, JoinGameRoomPayload>({
    mutationFn: (data: JoinGameRoomPayload) => joinGameRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room"] });
    },
  });
};
