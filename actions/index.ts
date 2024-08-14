"use server";

import appConfig from "@/config/appConfig";
import { CreateGameRoomPayload, CreateRoomResponseDTO } from "@/types";


const API_URL = appConfig.API_BASE_URL;

export const createGameRoom = async (data: CreateGameRoomPayload): Promise<CreateRoomResponseDTO> => {
  const request = await fetch(`${API_URL}/rooms`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })

  let response: CreateRoomResponseDTO = await request.json()
  console.log(response);
 
 return response
}
