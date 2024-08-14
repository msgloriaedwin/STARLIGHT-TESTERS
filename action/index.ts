"use server";

import appConfig from "@/config/appConfig";
import {
  CreateGameRoomPayload,
  CreateRoomResponseDTO,
  JoinGameRoomPayload,
  JoinRoomResponseDTO,
} from "@/types";

const API_URL = appConfig.API_BASE_URL;

export const createGameRoom = async (
  data: CreateGameRoomPayload
): Promise<CreateRoomResponseDTO> => {
  const request = await fetch(`${API_URL}/room`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request.json();
  console.log(response);

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

  const response = await request.json();
  console.log(response);

  return response;
};
