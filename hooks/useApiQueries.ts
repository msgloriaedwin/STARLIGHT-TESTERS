import { getRoom } from "@/actions";
import { useQuery } from "@tanstack/react-query";

export const useRoom = (roomId: string) => {
  return useQuery<any, Error>({
    queryKey: ["room"],
    queryFn: () => getRoom(roomId),
  });
};
