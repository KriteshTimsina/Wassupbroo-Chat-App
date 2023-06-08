export default interface IRoom {
  room: string;
  username?: string;
  roomId?: string;
  imageUrl?: string;
}
export interface IMessage {
  id: string;
  socketId: string;
  text: string;
  time: string;
  room: string;
  username: string;
}
