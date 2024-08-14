export interface CreateRoomResponseDTO {
  message: string;
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

// export interface JoinGameRoomPayload {
//   gameId: string;
//   userName: string;
//   avatar: string;
// }

export interface GuestSession {
  guestName: string;
}

export interface JoinGameRoomPayload {
  gameLink: string;
  guestSession: GuestSession;
}

export interface JoinRoomResponseDTO {
  status_code: number;
  message: string;
  session: {
    guestId: string;
    guestName: string;
    room: {
      id: string;
      created_at: string;
      updated_at: string;
      name: string;
      qr_code: string;
      game_link: string;
      game_pin: string;
      bingo_type: string;
      prize_value: number;
    };
    id: string;
    created_at: string;
    updated_at: string;
  };
}
