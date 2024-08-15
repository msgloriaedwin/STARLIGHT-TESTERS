import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoom, leaveRoom, sendMessage } from "@/actions";
import { SendMessagePayload } from "@/types";

export const useSendMessage = () => {
    const queryClient = useQueryClient();
  return useMutation<any, Error, SendMessagePayload>({
    mutationFn: (payload) => sendMessage(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["room"] })
  });
};

// Join room mutation
export const useJoinRoom = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, { token: string; roomId: string }>({
    mutationFn: ({ token, roomId }) => joinRoom(token, roomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room"] });
    },
  });
};

export const useLeaveRoom = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, { token: string; roomId: string }>({
    mutationFn: ({ token, roomId }) => leaveRoom(token, roomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room"] });
    },
  });
};
