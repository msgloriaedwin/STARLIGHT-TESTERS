interface CreateRoomResponseDTO {
  message: string;
  data: CreateRoomResponseDataDto;
}

interface CreateRoomResponseDataDto {
  id: string;
  name: string;
  qr_code: string;
  game_link: string;
  game_pin: string;
  bingo_type: string;
  prize_value: number;
  avatar_url: string;
}
