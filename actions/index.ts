"use server";

import {
  CreateGameRoomPayload,
  CreateRoomResponseDTO,
  JoinGameRoomPayload,
  JoinRoomResponseDTO,
} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createGameRoom = async (
  data: CreateGameRoomPayload
): Promise<CreateRoomResponseDTO> => {
  const requestPayload = {
    avatar: data.avatar,
    bingoType: data.bingoType,
    teamName: data.teamName,
    prizeValue: data.prizeValue,
  };
  const request = await fetch(`${API_URL}/rooms`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestPayload),
  });

  let response: CreateRoomResponseDTO = await request.json();

  return response;
};

export const joinGameRoom = async (
  data: JoinGameRoomPayload
): Promise<JoinRoomResponseDTO> => {
  const request = await fetch(`${API_URL}/rooms/join/link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response: JoinRoomResponseDTO = await request.json();
  console.log(response);

  return response;
};
