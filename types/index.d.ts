export interface CreateRoomResponseDTO {
  message: string;
  status: string;
  status_code: number;
  data: CreateRoomResponseDataDto;
}

export interface CreateRoomResponseDataDto {
  id: string;
  name: string;
  qr_code: string;
  game_link: string;
  game_pin: string;
  bingo_type: string;
  prize_value: number;
  avatar_url: string;
}

type DateTimeString = string;

enum GameStatus {
  Pending = "pending",
  Active = "active",
  Completed = "completed",
}

enum BingoType {
  Number = "number",
  Alphabets = "alphabets",
}

export interface Game {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  room: string;
  winner: string;
  master: string;
  numbers_called: number[];
  alphabets_called: string[];
  status: GameStatus;
}

export interface Message {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  room: Room;
  user: User;
  content: string;
}

export interface Room {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  name: string;
  games: Game[];
  qr_code: string;
  last_message: Message;
  game_link: string;
  game_pin: string;
  bingo_type: BingoType;
  prize_value: number;
  participants: User[];
  messages: Message[];
}

export interface User {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  avatar_url: string;
  rooms: Room[];
  messages: Message[];
}

export interface CreateGameRoomPayload {
  teamName: string;
  bingoType: "alphabets" | "numbers";
  avatar: string;
  prizeValue: string;
  token: string;
}
