"use server";

import {
  CreateGameRoomPayload,
  CreateRoomResponseDTO,
  GetTokenResponseType,
  SendMessagePayload,
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

export async function getCentrifugeToken(
  token: string
): Promise<GetTokenResponseType> {
  const request = await fetch(`${API_URL}/auth/token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();
  console.log(response);
  return response;
}

export async function getChannelSubscriptionToken({
  channel,
  token,
}: {
  channel: string;
  token: string;
}): Promise<string> {

  const payload = { channel: channel};
  console.log(channel);

  const request = await fetch(
    `${API_URL}/auth/subscribe`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  const response = await request.json();
  console.log(response);
  return response.token;
}


export async function getRoom(token: string, id: string) {
  const request = await fetch(`${API_URL}/rooms`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({id: id})
  });
  const response = await request.json();
  console.log(response);
  return response;
}

export async function leaveRoom(token: string, roomId: string) {
  const request = await fetch(`${API_URL}/rooms/${roomId}/leave`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  });
  const response = await request.json();
  console.log(response);
  return response;
}

export async function joinRoom(token: string, roomId: string) {
  const request = await fetch(`${API_URL}/rooms/${roomId}/join`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const response = await request.json();
  console.log(response);
  return response;
}

export async function sendMessage(payload: SendMessagePayload) {
  console.log(payload)
  const request = await fetch(`${API_URL}/rooms/${payload.roomId}/message`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: payload.message }),
    method: "POST",
  });
  const response = await request.json();
  return response;
}