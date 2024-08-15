// Utility Types
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

// DTO Interfaces
export interface GetTokenResponseType {
  status_code: number;
  message: string;
  token: string;
}
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

export interface CreateGameRoomPayload {
  teamName: string;
  bingoType: "alphabets" | "number";
  avatar: string;
  prizeValue: string;
  token: string;
}

export interface CreateUserDTO {
  email: string;
  username: string;
  password: string;
}

export interface CreateUserSuccessResponse {
  data: {
    user: {
      username: string;
      email: string;
      created_at: string;
    };
  };
}

export interface CreateUserErrorResponse {
  message: string;
  error: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginResponseDto {
  access_token: string;
  data: {
    user: {
      id: string;
      username: string;
      email: string;
    };
  };
}

export interface AuthResponseDto {
  message: string;
  access_token: string;
  data: {
    user: {
      id: string;
      username: string;
      email: string;
    };
  };
}

export interface MarkNumberDto {
  number: number;
}

export interface GuestSessionDTO {
  guestName: string;
}

export interface CreateJoinRoomDto {
  gameLink: string;
  guestSessionDto: GuestSessionDTO;
}

export interface GameCardDataDto {
  card: GameCard;
}

export interface GameCardResponseDto {
  message: string;
  data: {
    card: GameCard;
  };
}

export interface GameSettingsResponseDTO {
  data: GameSettings;
}

export interface UpdateGameSettingsDto {
  is_notification: boolean;
  is_sound: boolean;
  mode: "alphabets" | "numbers";
  difficulty_level: "easy" | "medium" | "hard";
}

export interface CreateAboutDto {
  description: string;
  key_benefits: string[];
  why_it_matters: string;
}

export interface UpdateAboutDto {
  description?: string;
  key_benefits?: string[];
  why_it_matters?: string;
}

// Core Application Interfaces
export interface SelectionPool {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  alphabets: string[];
  game: Game;
}
export interface Game {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  room: string;
  winner: string;
  master: string;
  selection_pool: SelectionPool;
  numbers_called: number[];
  alphabets_called: string[];
  status: GameStatus;
  bingo_type: BingoType;
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
  guestSessions: GuestSession[];
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
  game_settings: GameSettings;
}
export interface GameCard {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  user: User;
  game: Game;
  numbers: number[];
  alphabets: string[];
  marked_numbers: number[];
  marked_alphabets: string[];
  is_winner: boolean;
}
export interface GuestSession {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  guestId: string;
  guestName: string;
  room: Room;
}
export interface GameSettings {
  id: string;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  is_notification: boolean;
  is_sound: boolean;
  difficulty_level: "easy" | "medium" | "hard";
  mode: "alphabets" | "numbers";
  user: User;
}
export interface CreateAlphabetBingoCard {
  letters: string[];
}
export interface SendMessagePayload {
  message: string;
  token: string;
  roomId: string;
}
